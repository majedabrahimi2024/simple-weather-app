import { thunk } from "redux-thunk";
import {logger} from "redux-logger";
import { applyMiddleware, legacy_createStore as createStore } from "redux";
import weatherReducer from "./weather/weatherReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { rootSaga, watcherSaga } from "./weather/weatherSaga";

// legacy_createStore & thunk
// const store = createStore(weatherReducer,composeWithDevTools(applyMiddleware(thunk)))

// redux-saga
const sagaMiddleware = createSagaMiddleware();

const store = createStore(weatherReducer,composeWithDevTools(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(watcherSaga)
// sagaMiddleware.run(rootSaga)

// configureStore
// const store = configureStore({
//     reducer:{
//         weatherReducer,
//     },
//     middleware:[thunk]
// })

export default store;