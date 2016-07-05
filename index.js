import React from 'react'
import ReactDOM from 'react-dom'
import FormPreview from './Container/formPreview.js'
import FormEdit from './Container/formEdit.js'
import MyContainer from './Container/MyContainer.js'
import store from "./store.js"
import * as containerAPI from "./handlers/container-api.js"
import { Provider } from 'react-redux'
import {Router, Route, browserHistory, IndexRoute} from 'react-router'
import {syncHistoryWithStore} from 'react-router-redux'


const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
    <Provider store={store}>
        <Router  history={history}>
            <Route path="/" component={MyContainer} >
                <IndexRoute component={FormPreview} />
                <Route path="/editor" component={FormEdit} />
                <Route path="/preview" component={FormPreview} />
            </Route>
        </Router>
    </Provider>,
    document.getElementById('root')
)

containerAPI.getFirstData();



