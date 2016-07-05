// import * as types from "../actions/action-types"


export function showEditorAction() {
    return {
        type:'showEdit'
    }
}

export function showPreviewAction(){
    return {
        type:'showPreview'
    }
}

export function getData(){
    return {
        type:'getData'
    }
}

export function submitData(){
    return {
        type:'finalSubmit'
    }
}