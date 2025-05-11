
import { useSelector } from "react-redux";
import './design.css'
import { Nav } from "./arnav";
import { useNavigate } from "react-router-dom";
import { useState } from 'react';

export function FormInvent(){
    // const carNow = useSelector(store => store.carNow)
// const car =useSelector(x=>x.currentCarsData)
    const navigate = useNavigate()
    console.log()

    const aaa = () => {
        navigate('/pay')
    
}

    return<>
    <h1>בחרת להזמין רכב זה</h1>
    <h3>עליך לשמור קוד זה ולהזינו בעת החזרת הרכב</h3>
    <h4>בנוסף, על מנת לשמור על תקינות הרכב ובטיחותו, עליך לשלם כעת דמי פיקדון שתזוּכֶה עליהם בעת השבת הרכב במצב תקין</h4>
    <button onClick={aaa}>למעבר לתשלום</button>

    </>
}