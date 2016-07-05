import React from 'react'
import $ from "jquery"
import ReactDOM from 'react-dom'
import DialogBox from './Dialogbox.js'
import * as containerAPI from "../handlers/container-api.js"

var BottomButton = React.createClass({
    render:function(){
        if(this.props.formStatus == "preview"){
            return (<button onClick={this.showDialog}>增加</button>)
        }else{
            return (<button onClick={this.submitData}>提交</button>)
        }

    },
    submitData:function(){
        containerAPI.submit();
    },
    showDialog:function(){
        $('#dialogbox').show();
        ReactDOM.render(
        <DialogBox />,
            document.getElementById('dialogbox')
        );
    }
})

export default BottomButton;