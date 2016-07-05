import React from 'react'
import $ from "jquery"
import store from "../store.js"
import * as formAPI from "../handlers/form-editor-api.js"

var DialogBox = React.createClass({
    render: function() {
        return (
            <div>
            <label><input type="radio" name="radiotype" onClick ={this.AddText}/>文本</label>
        <label><input type="radio" name="radiotype" onClick ={this.AddDate}/>日期</label>
        </div>
        );
    },

    AddText:function(){
        $('#dialogbox').hide();
        formAPI.addItemText()
    },

    AddDate:function(){
        $('#dialogbox').hide();
        formAPI.addItemDate()
    }
})

export default DialogBox