import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Outlet, useNavigate } from "react-router-dom"
import { addCar } from "../redux/Action"
import { Nav } from "./arnav";
export const Hachzarot = () => {
    const navigate = useNavigate()
            const hachzarot= useSelector(x => x.hachzarot)
            const dis = useDispatch() 

            const all = () => {
                    navigate('/nihul')
                
            }
            return <>
        <h1>WELCOM TO Haczarot PAGE!!!!!!</h1>
                {/* Outlet - מגדיר היכן תטען קומפוננטת הילד */}
                {/* <Outlet></Outlet> */}
                {hachzarot.map((item, index) =>
                    <div key={index}>
                        <label>{item.id}</label>:קוד החזרה:<label>{item.idHas}</label>*********************קוד
                               </div>
                               
                )}
                                            <button onClick={all}>חזרה לניהול</button>

   </>
}


