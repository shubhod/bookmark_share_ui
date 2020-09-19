import {createStore, combineReducers} from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import mainNavReducer from "./screens/MainNav/mainNavRedux/mainNavReducer";
const rootReducer=combineReducers({mainNavReducer});
export const reduxStore=createStore(rootReducer,composeWithDevTools());
