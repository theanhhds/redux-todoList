import * as ActionType from '../constants/todoConstants';

const initialState = {
    todo_list : [
        {
            id: 0,
            name: "Add something to this list",
            isCompleted: false,
            isShowed : true,
        }
    ],
}

export const todoReducer = (state = initialState, action) => {
    switch (action.type){
        case ActionType.ADD_NEW_ITEM:
            let listNew = [...state.todo_list, action.payload];
            // console.log(listNew);
            return {...state, todo_list: listNew}

        case ActionType.REMOVE_ITEM_BY_ID:
            let id = action.payload;
            return {...state, 
                todo_list: state.todo_list.map(todo => {
                    if (todo.id === id)
                    return {...todo, isCompleted: true, isShowed: false}
                    else
                    return todo;
                })
            }

        default:
            break;
    }
    return {...state}
}