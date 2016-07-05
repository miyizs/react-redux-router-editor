/**
 * Created by yinzhaoshu on 6/28/16.
 */
import reducers from "./reducers/reducers.js"

import { createStore } from 'redux'
var store = createStore(reducers)

export default store;
