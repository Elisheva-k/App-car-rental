import './design.css'
// import p1 from "../picture/p1.jpg";
// import p2 from "../picture/p2.jpg";
// import p3 from "../picture/p3.jpg";
// import p4 from "../picture/p4.jpg";
// import p5 from "../picture/p5.jpg";
import { useDispatch, useSelector } from "react-redux";
import { Nav } from "./arnav";
import { useState } from 'react';
import {currentCarsData} from '../redux/Store';
import {Outlet,useNavigate } from "react-router-dom";
import { bottom } from '@popperjs/core';
import {setCarNow} from "../redux/Action"

export const Home = () => {
    const [car, setCar] = useState({})
    // const carNow=useSelector(store=>store.carNow)
    // selector - שליפת משתנים גלובליים מתוך הסטייט
    const carsData = useSelector(store => store.carsData)
    // useDispatch - משתנה שמשגר פעולות לחלל
    const dispatch = useDispatch()
    // יצירת משתנה שמנתב למקום אחר
    //***************************** */
    const navigate = useNavigate()
// const add=(index)=>{
//     if(carsData[index].isAvilable==true)
//          navigate('/formInvent')}

    const carli = () => {
        navigate('/homeMesunan')
}
// {(e)=>setCar({...car,price:carsData[0].price})}
// {(e)=>setCar({...car,seatsnumber: carsData[0].seatsnumber})}

// setCar({...car,price: carsData[0].price})
const func=()=>{
    navigate('/formInvent')
}
return <>
    <Nav></Nav>
{/* Outlet - מגדיר היכן תטען קומפוננטת הילד */}
<Outlet></Outlet>
{carsData.map((item, index) =>
    <div id='card' key={index}>
        <p>{item.licenseNumber}<br></br>  נמצא בעיר {item.city} <br></br> ברחוב {item.street} </p>
                     {/* <img src={p3} style={{ width: '25vw', height: 'auto' }}></img><br></br> */}
                     {/* {dispatch(setCarNow(carsData[0]))}
                    `${process.env.PUBLIC_URL}/picture/${item.pic}.jpg` */}                    
                     {item.isAvilable =="true" && <button className='green' onClick={ func() }>!!אני רוצה עכשיו</button>} 
                     {item.isAvilable !="true" && <button className='red'>רכב זה על הכביש</button>} 
    </div>
)}
            <button onClick={carli}>!חפש את הרכב הקרוב</button>
</>
}