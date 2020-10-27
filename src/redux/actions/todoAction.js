import * as ActionType from '../constants/todoConstants';

export const actAddNewItem = item => {
    return {
        type: ActionType.ADD_NEW_ITEM,
        payload: item,
    }
}

export const actRemoveItemById = id => {
    return {
        type: ActionType.REMOVE_ITEM_BY_ID,
        payload: id,
    }
}