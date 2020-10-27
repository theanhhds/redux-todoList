import * as ActionType from '../constants/todoConstants';

export const actAddNewItem = item => {
    return {
        type: ActionType.ADD_NEW_ITEM,
        payload: item,
    }
}