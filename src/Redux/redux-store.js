import {applyMiddleware, combineReducers, createStore} from "redux"
import thunkMiddleware from "redux-thunk";
import albumReducer from "./album-reducer";
import {reducer as formReducer} from "redux-form";


const reducers = combineReducers({
    album: albumReducer,
    form: formReducer
});
const store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;
export default store;





















