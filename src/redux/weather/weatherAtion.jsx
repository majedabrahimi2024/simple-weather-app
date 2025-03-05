import axios from "axios"
import { RECEIVE_WEATHER_ERROR, RECEIVE_WEATHER_RESPONSE, SEND_WEATHER_REQUEST } from "./weatherType"

export const sendWeatherRequest = (query)=>{
    return {
        type: SEND_WEATHER_REQUEST,
        payLoad:query,
    }
}
export const receiveWeatherResponse = (data)=>{
    return {
        type: RECEIVE_WEATHER_RESPONSE,
        payLoad:data
    }
}
export const receiveWeatherError = (data)=>{
    return {
        type: RECEIVE_WEATHER_ERROR,
        payLoad:data
    }
}

// thunk middleware method
// export const  getWeatherInfo = (query)=>{
//     return (dispatch)=>{
//         dispatch(sendWeatherRequest());
//         axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&appid=81cfc2f5a1864e87ac7b0adcd8b6bf77`).then(res=>{
//             dispatch(receiveWeatherResponse(res.data))
//         }).catch(error=>{
//             dispatch(receiveWeatherError(error.message))
//         })

//     }
// }