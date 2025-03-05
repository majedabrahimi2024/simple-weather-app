import React, {useEffect, useState} from 'react';
import PersianDate from './PersianDate';
import { useDispatch, useSelector } from 'react-redux';
import { getWeatherInfo, sendWeatherRequest } from '../redux/weather/weatherAtion';

const Weather = () => {

    // useSelector & useDispatch
    const {loading,data,error} = useSelector(state=>state);
    const dispatch = useDispatch();

    // states
    const [backMode,setBackMode] = useState("usual");
    const [query,setQuery] = useState("")

    // handleGetWeather
    const handleGetWeather = (e)=>{
        e.preventDefault();
        // dispatch(getWeatherInfo(query));
        dispatch(sendWeatherRequest(query));
        setQuery("")
    }

    // useEffect
    useEffect(() => {
        
        if(!data.main){
            return 
        }
        let temp = data.main.temp
        if(temp < 12){
            setBackMode("cold")
        }else if(temp < 20){
            setBackMode("usual")
        }else{
            setBackMode("warm")
        }
        return () => {
            
        };
    }, [data]);
    
    return (
        <div className={`app pt-4 container-fluid d-flex justify-content-center align-items-center back_${backMode}`}>

            <div className="row app-content-box">
                    <div className="col-12 my-4">
                        <form onSubmit={handleGetWeather} action="#">
                            <input type="text" 
                                className="search_input form-control text_color placeholder_color" 
                                placeholder={data.name || "نام شهر یا کشور"}
                                value={query}
                                onChange={(e)=>setQuery(e.target.value)}
                                autoFocus
                            />
                        </form>
                    </div>
                    <div className="col-12 my-4">
                        <h3 className="text-center text_color">
                            <PersianDate/>
                        </h3>
                    </div>

                {loading ? (
                    <div className="col-12 my-4 text-center text-secondary">
                        <div className="spinner-border text-white" role='status'>
                            <span className="visually-hidden">loading...</span>
                        </div>
                    </div>
                ) : data.main ? (
                    <>
                        <div className="col-12 my-4">
                            <div className="temprature_box pt-3">
                                <span dir='ltr'>{`${Math.round(data.main.temp)} °C`}</span> 
                            </div>
                        </div>
                        <div className="col-12 my-4">
                            <h1 className="text-center fa-3x lathin_text text_color">{data.weather[0].description}</h1>
                        </div>
                    </>
                ) : error ? (
                    <div className="col-12 my-4">
                        <h3 className="text-center text_color">نام شهر یا کشور را به درستی وترد کنید</h3>
                    </div>
                ) : (
                    <div className="col-12 my-4">
                        <h3 className="text-center text_color">مکان مورد نظر را جستوجو کنید</h3>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Weather;
