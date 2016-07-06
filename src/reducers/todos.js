export default function todos(state = [], action) {

    const todoIndex = () => {
        return state.findIndex(thisTodo => {
            return thisTodo && thisTodo.id === action.todo.id;
        });
    };

    switch (action.type) {
        case 'todo:insert':
            // append todo at end if not already found in state
            return todoIndex() < 0 ? [...state, action.todo] : state;

        default:
            return state;
    }

}
