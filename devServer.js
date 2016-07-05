var path = require('path');
var express = require('express');
var webpack = require('webpack');
var config = require('./webpack.config.dev');

var app = express();

var server = require('http').Server(app);
var io = require('socket.io')(server);
var r = require('rethinkdb');
var changefeedSocketEvents = require('./socket-events.js');


var compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.use('/public', express.static('public'));

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});


r.connect({ db: 'app' })
.then(function(connection) {
    io.on('connection', function (socket) {

        // insert new todos
        socket.on('todos:client:insert', function(todo) {
            r.table('todos').insert(todo).run(connection);
        });

        // update todo
        socket.on('todos:client:update', function(todo) {
            var id = todo.id;
            delete todo.id;
            r.table('todos').get(id).update(todo).run(connection);
        });

        // delete todo
        socket.on('todos:client:delete', function(todo) {
            var id = todo.id;
            delete todo.id;
            r.table('todos').get(id).delete().run(connection);
        });

        // emit events for changes to todos
        r.table('todos').changes({ includeInitial: true, squash: true }).run(connection)
        .then(changefeedSocketEvents(socket, 'todos'));
    });
    server.listen(3000);
})
.error(function(error) {
    console.log('Error connecting to RethinkDB!');
    console.log(error);
});


/*
app.listen(3000, function(err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Listening at http://localhost:3000');
});
*/
