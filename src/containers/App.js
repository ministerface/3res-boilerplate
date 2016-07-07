import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Main from '../components/layout/Main';
import * as actionTodos from '../actions/todos';
import * as actionFeeds from '../actions/feeds';

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
    feeds: state.feeds
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    actionTodos: bindActionCreators(actionTodos, dispatch),
    actionFeeds: bindActionCreators(actionFeeds, dispatch)
  }
}


const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;
