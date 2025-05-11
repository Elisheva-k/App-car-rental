import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Outlet, useNavigate } from "react-router-dom"
import { addCar } from "../redux/Action"
import { Nav } from "./arnav";
export const Carsss = () => {
    const navigate = useNavigate()

  
            const carsData = useSelector(x => x.carsData)
            
        
            const dis = useDispatch()
        
            const add = () => {
                navigate('/addC')
            }
            const del = () => {
                navigate('/delC')
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
               <button onClick={add}>הוספת רכב</button>
               <button onClick={del}>מחיקת רכב</button><br></br><br></br><br></br>
               <button onClick={all}>חזרה לניהול</button>



   </>
}


