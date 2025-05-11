import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Outlet, useNavigate } from "react-router-dom"
import { addCar } from "../redux/Action"
import { Nav } from "./arnav";
export const Hashalot = () => {
    const navigate = useNavigate()
            const hashalot= useSelector(x => x.hashalot)
            const dis = useDispatch() 
            const all = () => {
                navigate('/nihul')
            }
            return <>
        <h1>WELCOM TO Hashalot PAGE!!!!!!</h1>
                {/* Outlet - מגדיר היכן תטען קומפוננטת הילד */}
                {/* <Outlet></Outlet> */}
                {hashalot.map((item, index) =>
                    <div key={index}>
                        <label>{item.id}</label>:קוד רכב:<label>{item.licenseNumber}</label>************קוד משתמש<label>{item.userId}</label>*********קוד השאלה
                               </div>
                )}
                                            <button onClick={all}>חזרה לניהול</button>

   </>
}


