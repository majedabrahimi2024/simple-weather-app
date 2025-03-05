import { all, call, fork, put, takeEvery, takeLatest } from "redux-saga/effects";
import { SEND_WEATHER_REQUEST } from "./weatherType";
import axios from "axios";
import { receiveWeatherError, receiveWeatherResponse } from "./weatherAtion";

// get weather data
const getWeatherRequest = (query)=>{
    return axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&appid=81cfc2f5a1864e87ac7b0adcd8b6bf77`);
}

// handle get weather data
function* handleGetWeather(action){
    try {
        const res = yield call(getWeatherRequest, action.payLoad)
        yield put(receiveWeatherResponse(res.data))
    } catch (error) {
        yield put(receiveWeatherError(error.message))
    }

}
// watcher saga
export function* watcherSaga(){
    yield takeLatest(SEND_WEATHER_REQUEST, handleGetWeather)
}

// function* handleGetWeather2(action) {
//     try {
//         const response = yield call(getWeatherRequest, action.payLoad)
//         yield put(receiveWeatherResponse(response.data))
//     } catch (error) {
//         put(receiveWeatherError(error.message))
//     }
// }

// export function* watcherSaga2() {
//     // yield takeEvery(SEND_WEATHER_REQUEST, handleGetWeather2)
//     yield takeLatest(SEND_WEATHER_REQUEST, handleGetWeather2)
// }

// export function* rootSaga(){
//     yield all([
//         fork(watcherSaga),
//         fork(watcherSaga2),
//     ])
// }

// export function* rootSaga (){
//     yield all([
//         fork(watcherSaga),
//         fork(watcherSaga2),
//     ])
// }