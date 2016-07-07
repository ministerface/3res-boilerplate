export default function feeds(state = [], action) {

    const todoIndex = () => {
        return state.findIndex(thisTodo => {
            return thisTodo && thisTodo.id === action.todo.id;
        });
    };

    switch (action.type) {
        case 'feed:insert':
            // append todo at end if not already found in state
            return todoIndex() < 0 ? [action.todo, ...state] : state;

        default:
            return state;
    }

}
