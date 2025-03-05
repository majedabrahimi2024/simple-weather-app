import jMoment from 'moment-jalaali';
import React, {useState, useEffect} from 'react';

const weekDays = [
    "یکشنبه" ,
    "دوشنبه" ,
    "سه شنبه ",
    "چهارشنبه" ,
    "پنج شنبه ",
    "جمعه" ,
    "شنبه",
]

const yearMonths = [
 "فروردین",
"اردیبهشت",
"خرداد",
"تیر" ,
"مرداد" ,
"شهریور",
"مهر",
"آبان",
"آذر",
"دی",
"بهمن" ,
"اسفند" ,
]

const PersianDate = () => {
    
    // states
    const [date,setDate] = useState("");
    const [time,setTime] = useState("");
    
    // useEffect
    useEffect(() => {
        let m = jMoment()
        let finalDate = `${weekDays[m.day()]} ${m.jDate()} ${yearMonths[m.jMonth()]} ماه ${m.jYear()}`
        setDate(finalDate)
        setTime(m.format("HH:mm"))
        
        return () => {
            
        };
    }, []);

    return (
        <>
            <span className="mb-3 d-block text-center">{date}</span>
            <span className="d-block text-center">ساعت {time}</span>
        </>
    );
}

export default PersianDate;
