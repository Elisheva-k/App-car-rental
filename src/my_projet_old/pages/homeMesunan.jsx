import './design.css'
// np
import { useDispatch, useSelector } from "react-redux";
import { Nav } from "./arnav";
import { useState } from 'react';
import {currentCarsData} from '../redux/Store';
import {Outlet,useNavigate } from "react-router-dom";
import { bottom } from '@popperjs/core';
import { useParams } from "react-router-dom";


export const HomeMesunan = () => {
        const [details, setDetails] = useState({})
        const carsData = useSelector(store => store.carsData)
        const cities = useSelector(store => store.cities)

        // selector - שליפת משתנים גלובליים מתוך הסטייט

    // useDispatch - משתנה שמשגר פעולות לחלל
    const dispatch = useDispatch()
    // const {index } = params

    // יצירת משתנה שמנתב למקום אחר
    //***************************** */
    const navigate = useNavigate()
return <>
    <Nav></Nav>
    <div id="selector">
<select onClick={(e) => {setDetails({ ...details, city:e.target.value })}}>
    <option key="1">בחר עיר</option>
    {cities.map((item, index) =>
<option key={index} value={item.city}>{item.city}</option>
)}
</select>
<select onClick={(e) => {setDetails({ ...details, street:e.target.value })}}>
    <option key={"1"} value={'all'}>בחר רחוב</option>
    {carsData.map((item, index) =>(item.city==details.city?
<option key={index} value={item.street}>{item.street}</option>:"")
)}
</select>
</div>  
{carsData.map((item, index) =>
    ((item.city==details.city &&(item.street==details.street||details.street=='all' )&&item.isAvilable =="true")?
    <div id='card' key={index}>
        <p>{item.licenseNumber}<br></br>  נמצא בעיר {item.city} <br></br> ברחוב {item.street}</p>
                     {/* <img src={`${process.env.PUBLIC_URL}./picture/${item.pic}.jpg`} style={{ width: '25vw', height: 'auto' }}></img><br></br> */}
                     {/* <img src={p1} style={{ width: '25vw', height: 'auto' }}></img><br></br> */}

                     {/* { CarNow.push(item.licenseNumber,item.degemCode,item.price,item.kamash)} */}
                     {item.isAvilable =="true" && <button className='green' onClick={index=() =>item.isAvilable=='true' && navigate('/formInvent')}>!!אני רוצה עכשיו</button>} 
    </div>:"")
)}
</>
}
