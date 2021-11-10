import { createStore } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import MainReducer from "./Reducers/MainReducer"

export default createStore(MainReducer,undefined,composeWithDevTools())