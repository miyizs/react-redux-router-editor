import store from '../store';
import { showEditorAction, showPreviewAction,getData,submitData} from '../actions/container-actions.js';

export function showEditor() {
    store.dispatch(showEditorAction());
}

export function showPreview(){
    store.dispatch(showPreviewAction());
}

export function getFirstData(){
    store.dispatch(getData());
}

export function submit(){
    store.dispatch(submitData());
}