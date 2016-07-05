
export function addTextAction() {
    return {
        type:'addItem',inputType:'text'
    }
}

export function addDateAction() {
    return {
        type:'addItem',inputType:'date'
    }
}

export function removeItemAction(deletedKey) {
    return {
        type:'removeItem',removedKey:deletedKey
    }
}