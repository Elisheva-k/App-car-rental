import './design.css'

import { useDispatch, useSelector } from "react-redux";
import { Nav } from "./arnav";
import { useState } from 'react';
import {currentCarsData} from '../redux/Store';
import {Outlet,useNavigate } from "react-router-dom";
import { bottom } from '@popperjs/core';
import { useParams } from "react-router-dom";
import { FormInvent } from './formInvent';


export const HomeMesunan = () => {
        const [details, setDetails] = useState({})
        const carsData = useSelector(store => store.carsData)
        // selector - שליפת משתנים גלובליים מתוך הסטייט
        const [carD, setCarD] = useState(null)

    // useDispatch - משתנה שמשגר פעולות לחלל
    const dispatch = useDispatch()
    // const {index } = params

    // יצירת משתנה שמנתב למקום אחר
    //***************************** */
    const navigate = useNavigate()
    const carli = () => {
        navigate('/homeMesunan')
    }
return <>
    <Nav></Nav>
    {carD!=null && <FormInvent car={carD}></FormInvent>}
    <div id="selector">
    {/*  const array = [1, 2, 2, 3, 4, 4, 5];דבורי:0548477970
 const uniqueArray = Array.from(new Set(array));
 console.log(uniqueArray);אסתי גרפל:0527614692 */}
<select onClick={(e) => {setDetails({ ...details, city:e.target.value })}}>
    <option key="1">בחר מיקום</option>
    {carsData.map((item, index) =>
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
    ((item.city==details.city &&(item.street==details.street//||details.street=='all'
     )&&item.isAvilable =="true")?
    <div id='card' key={index}>
        <p>{item.licenseNumber}<br></br>  נמצא בעיר {item.city} <br></br> ברחוב {item.street}</p>
                     <img src={item.pic} style={{ width: '25vw', height: 'auto' }}></img><br></br>

                     {/* { CarNow.push(item.licenseNumber,item.degemCode,item.price,item.kamash)} */}
                     {item.isAvilable != "false" && <button className='green' onClick={index = () => setCarD(item)}>!!אני רוצה עכשיו</button>}
    </div>:"")
)}
</>
}
