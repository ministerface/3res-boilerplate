var path = require('path');
var express = require('express');
var webpack = require('webpack');
var config = require('./webpack.config.dev');

var app = express();

var server = require('http').Server(app);
var io = require('socket.io')(server);
var r = require('rethinkdb');
var changefeedSocketEvents = require('./socket-events.js');

var router = express.Router();

router.get('/feeds', function(req, res) {

  r.connect({ db: 'app' })
  .then(function(connection) {
    r.table('Feeds').orderBy(r.desc('date')).run(connection).then(function(cursor){
      cursor.toArray(function(err, result) {
      if(err) {
        return next(err);
      }

      res.json(result);
    });

    });
  });


});

var compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.use('/public', express.static('public'));
app.use("/styles", express.static(__dirname + '/styles'));
app.use("/images", express.static(__dirname + '/images'));


app.use('/api/v1', router);


app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});





r.connect({ db: 'app' })
.then(function(connection) {
    io.on('connection', function (socket) {

        // insert new todos
        socket.on('feed:client:insert', function(todo) {
            r.table('Feeds').insert(todo).run(connection);
        });

        // update todo
        socket.on('feed:client:update', function(todo) {
            var id = todo.id;
            delete todo.id;
            r.table('Feeds').get(id).update(todo).run(connection);
        });

        // delete todo
        socket.on('feed:client:delete', function(todo) {
            var id = todo.id;
            delete todo.id;
            r.table('Feeds').get(id).delete().run(connection);
        });

        // emit events for changes to todos
        r.table('Feeds').changes({ includeInitial: false, squash: true }).run(connection)
        .then(changefeedSocketEvents(socket, 'feed'));
    });
    server.listen(3000);
})
.error(function(error) {
    console.log('Error connecting to RethinkDB!');
    console.log(error);
});
