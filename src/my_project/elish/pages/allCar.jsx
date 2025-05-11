import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Outlet, useNavigate } from "react-router-dom"
import { addCar } from "../redux/Action"
import { Nav } from "./arnav";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar, faTrash, faPlus, faList, faArrowAltCircleUp, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'; // Icons for buttons

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
               <button onClick={add}>
                <FontAwesomeIcon icon= {faPlus}  />  הוספת רכב 
            </button>
            <button onClick={del}>
                <FontAwesomeIcon icon= {faTrash}  />   מחיקת רכב 
            </button>
            <br /><br /><br />
            <button onClick={all}>
            <FontAwesomeIcon icon={faExternalLinkAlt} style={{ transform: "rotate(-45deg)" }} />  חזרה לניהול 
            </button>

   </>
}


