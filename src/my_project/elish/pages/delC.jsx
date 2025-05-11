import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Outlet, useNavigate } from "react-router-dom"
import { deleteCar } from "../redux/Action"

export const DelC=()=>{
    const navigate = useNavigate()
    const carsData = useSelector(x => x.carsData)
    const [carlicenseNumber,setcarlicenseNumber]=useState()
    const dis = useDispatch()

    const del = () => {
        console.log(carlicenseNumber)
        dis(deleteCar(carlicenseNumber))
    }
    const all = () => {
        navigate('/nihul')
    }
    return <>

    {/* Outlet - מגדיר היכן תטען קומפוננטת הילד */}
    {/* <Outlet></Outlet> */}
    {carsData.map((item, index) =>
        <div key={index}>
           <label>{item.licenseNumber}</label> - <label>{item.seatsNumber}</label> - <label>{item.price}</label>
            {/* <button onClick={() => show(index)}>show details</button> */}
        </div>
    )}
    <input placeholder="הכנס קוד רכב" onBlur={(e) =>{setcarlicenseNumber(e.target.value)}}></input>
    {/*  {carsData.filter(x=>x.licenseNumber==*/}
    <button onClick={del}>מחיקה</button>
    <button onClick={all}>חזרה לניהול</button>

</>
}