import store from '../store';
import { addTextAction, addDateAction,removeItemAction } from '../actions/form-actions';


export function addItemText() {
    store.dispatch(addTextAction());
}

export function addItemDate() {
    store.dispatch(addDateAction());
}

export function removeItem(deletedKey){
    store.dispatch(removeItemAction(deletedKey));
}



