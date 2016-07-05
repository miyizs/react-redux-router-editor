/**
 * Created by yinzhaoshu on 6/28/16.
 */
import { combineReducers } from 'redux'
import _ from 'lodash'
import $ from 'jquery'
import store from "../store.js"
import { routerReducer as routing } from 'react-router-redux'



var initialFormData = {
    status:"preview"
}
var initialItemsData = {
    items:[]
}

var reducers = combineReducers({
    formState:pageStatusReducer,
    itemsState:itemReducer,
    routing
});

function pageStatusReducer(state = initialFormData,action){
    switch (action.type) {
        case 'showEdit':
            return _.assign({}, state, {status:"edit"});
        case 'showPreview':
            return _.assign({}, state, {status:"preview"});
        default:
            return state;
    }


}

function itemReducer(state = initialItemsData,action){
    var neededItem;
    var getBackData = function(argumentData) {
        store.dispatch({type:'processState',finalData:argumentData});
    }

    if(action.type == 'getData'){
        var items = function(callback){
            $.ajax({
                url:'/item',
                dataType:'json',
                success:function (data) {
                    callback(data);
                },
                error:function (err) {
                    console.log(err);
                }
            });
        }
        items(getBackData);
    }

    if(action.type == 'processState'){
        return _.assign({}, state, action.finalData);
    }

    if(action.type == "removeItem"){
        var inStateDeletedArray;
        if(!state.deletedItems){
            inStateDeletedArray = [];
        }else{
            inStateDeletedArray = state.deletedItems;
        }
        var deletedArray = [];
        _.map(state.items,function(n){
            if(n.id){
                if(n.key == action.removedKey ){
                    deletedArray.push(n)
                    inStateDeletedArray.push(n)
                }
            }
        })
        neededItem = _.filter(state.items,function(n){
            return n.key != action.removedKey
        })
        console.log(_.assign({}, state, {items: neededItem,deletedItems:inStateDeletedArray}));
        return _.assign({}, state, {items: neededItem,deletedItems:inStateDeletedArray});
    }

    if(action.type == "addItem"){
        var theKey = Math.random().toString().split('.')[1];
        if(action.inputType == "text"){
            var newItem = {inputType:"text",key:"i"+theKey};
        }else if(action.inputType == "date"){
            var newItem = {inputType:"date",key:"i"+theKey};
        }
        var newItems = _.concat(state.items, newItem);
        var deletedArray = (!state.deletedItems)?new Array():state.deletedItems;
        console.log(_.assign({}, state, {items:newItems,deletedItems:deletedArray}))
        return _.assign({}, state, {items:newItems,deletedItems:deletedArray})
    }

    if(action.type == "finalSubmit"){
        $.ajax({
            url: '/submitData',
            type: 'POST',
            data: {finalData: 'state'},
        })
        .done(function(obj) {
            console.log(obj);
        })
        .fail(function(e) {
            console.log(e);
        })
    }

    return state;
}

export default reducers;