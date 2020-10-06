import {createStore, combineReducers,applyMiddleware} from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import mainNavReducer from "./screens/MainNav/mainNavRedux/mainNavReducer";
import thunk from "redux-thunk";
const rootReducer=combineReducers({mainNavReducer});
export const reduxStore=createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)));
