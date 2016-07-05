/**
 * Created by yinzhaoshu on 6/28/16.
 */
import React from 'react'
import store from "../store.js"
import Itembox from '../Components/ItemBox.js'
import BottomButton from '../Components/BottomButton.js'
import { Component, PropTypes } from 'react'
import { connect } from 'react-redux'


var FormEdit = React.createClass({
    render:function(){
        return(
            <div>
                <Itembox items={this.props.items} formStatus = {this.props.status}/>
                <BottomButton formStatus = {this.props.status}/>
            </div>
        )
    }
})

FormEdit.propTypes = {
    status: PropTypes.string.isRequired,
    items: PropTypes.array.isRequired
}
FormEdit.contextTypes={
    router: React.PropTypes.object
}

function mapStateToProps(state, ownProps) {
    return {
        items: state.itemsState.items,
        status: state.formState.status
    }
}
export default connect(mapStateToProps, {
})(FormEdit)
