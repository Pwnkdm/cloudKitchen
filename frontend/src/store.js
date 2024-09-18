import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import { thunk } from "redux-thunk";
import loginReducer from "./components/Login/State/loginReducer";
import cartReducer from "./components/Cart/state/cartReducer";
import profileReducer from "./components/Profile/State/profileReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  login: loginReducer,
  cart: cartReducer,
  profile: profileReducer,
});

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
