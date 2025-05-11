import './design.css'
import { useDispatch, useSelector } from "react-redux";
import { Nav } from "./arnav";
import { useState } from 'react';
import { setCurrentCarsData } from '../redux/Action';
import { Outlet, useNavigate } from "react-router-dom";
import { FormInvent } from './formInvent';



export const Home = () => {
    const [carD, setCarD] = useState(null)
    // selector - שליפת משתנים גלובליים מתוך הסטייט
    const carsData = useSelector(store => store.carsData)
    // useDispatch - משתנה שמשגר פעולות לחלל
    const dispatch = useDispatch()
    // יצירת משתנה שמנתב למקום אחר
    //***************************** */
    const navigate = useNavigate()
    const add = (index) => {
        if (carsData[index].isAvilable == true)
            navigate('/formInvent')
    }

    const carli = () => {
        navigate('/homeMesunan')
    }
    console.log(carD)
// debugger
//     const funcCar=(item)=>{
//         debugger
//         setCarD(item)
//         dispatch(setCurrentCarsData(carD))

        // console.log(carD)
        // navigate('/formInvent')
    
    return <>
        <Nav></Nav>
        <button className="amazing-button" onClick={carli}>!חפש את הרכב הקרוב</button>
        {/* Outlet - מגדיר היכן תטען קומפוננטת הילד */}
        {/* <Outlet></Outlet> */}
        <div id="container">
        {carD!=null && <FormInvent car={carD}></FormInvent>}
        {carsData.map((item, index) =>
            <div id='card' key={index}>
                <p>{item.licenseNumber}<br></br>  נמצא בעיר {item.city} <br></br> ברחוב {item.street} </p>
                <img src={item.pic} style={{ width: '25vw', height: 'auto' }}></img><br></br>
                {item.isAvilable != "false" && <button className='green' onClick={index = () => setCarD(item)}>!!אני רוצה עכשיו</button>}
                {item.isAvilable == "false" && <button className='red'>רכב זה על הכביש</button>}
            </div>
        )}
        </div>
    </>
}
