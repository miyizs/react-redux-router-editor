/**
 * Created by yinzhaoshu on 6/29/16.
 */
import React from 'react'
import $ from "jquery"
import store from "../store.js"
import * as formAPI from "../handlers/form-editor-api.js"

var Itembox = React.createClass({
    render: function() {
        var me = this;
        var currentPage = this.props.formStatus;
        var itemsNode = this.props.items.map(function (item) {
            if(currentPage == 'preview'){
                if(item.inputType=="text"){
                    return (<div id={item.id}><span>文本</span><input type="text"/><button onClick={me.deleteNode} data-key={item.key}>删除</button></div>)
                }else{
                    return (<div id={item.id}><span>日期</span><input type="date"/><button onClick={me.deleteNode} data-key={item.key}>删除</button></div>)
                }
            }else{
                if(item.inputType=="text"){
                    return (
                        <div><span>文本</span><input type="text"/></div>
                );
                }else{
                    return (
                        <div><span>日期</span><input type="date"/></div>
                );
                }

            }


        });
        return (
            <div>
            {itemsNode}
            </div>
        );
    },

    deleteNode:function(e){
        var deletedKey = $(e.target).attr('data-key');
        formAPI.removeItem(deletedKey)
        // store.dispatch({type:'removeItem',removedKey:deletedKey})
    }
});

export default Itembox;
