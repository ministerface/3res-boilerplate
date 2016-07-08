export default function feeds(state = {
  isFetching: false,
  items: []
}, action) {

    const todoIndex = () => {
        return state.items.findIndex(thisFeed => {
            return thisFeed && thisFeed.id === action.feed.id;
        });
    };

    switch (action.type) {
        case 'feed:insert':
            // append todo at end if not already found in state
            return todoIndex() < 0 ? {
              ...state, items: [action.feed, ...state.items]
            } : state;

      case 'REQUEST_FEEDS':
        return Object.assign({}, state, {
        isFetching: true
        })

        case 'RECEIVE_FEEDS':
        return Object.assign({}, state, {
           isFetching: false,
           items: action.feeds,
        });





        default:
            return state;
    }



}
