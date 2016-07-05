/**
 * Created by yinzhaoshu on 6/28/16.
 */
import React from 'react'
import { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import * as containerAPI from "../handlers/container-api.js"

var MyContainer = React.createClass({
    render:function(){
        if(this.props.status == "preview"){
            return(
                <div>
                    <button onClick={this.changeToEdit}>预览</button>
                    {this.props.children}
                </div>
            )
        }else{
            return(
                <div>
                    <button onClick={this.changeToPreview}>编辑</button>
                    {this.props.children}
                </div>
            )
        }
    },

    changeToPreview:function(){
        containerAPI.showPreview()
        this.context.router.push("/preview")
    },

    changeToEdit:function(){
        containerAPI.showEditor();
        this.context.router.push("/edit")
    }
})

MyContainer.propTypes = {
    status: PropTypes.string.isRequired
}
MyContainer.contextTypes={
    router: React.PropTypes.object
}

function mapStateToProps(state, ownProps) {
    return {
        status: state.formState.status
    }
}
export default connect(mapStateToProps, {
})(MyContainer)
