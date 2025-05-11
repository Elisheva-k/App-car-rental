import './design.css';
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Outlet, useNavigate } from "react-router-dom"
import { deleteCar } from "../redux/Action"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar, faTrash, faPlus, faList, faArrowAltCircleUp, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'; // Icons for buttons

///////פונקציה למחיקת רכב//////
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






<div className="table-container">
            <table>
                <thead>
                    <tr>
                        <th>זמינות</th>
                        <th>מחיר לשעה</th>
                        <th>מספר רישוי</th>
                    </tr>
                </thead>
                <tbody>
                    {carsData.length > 0 && (
                        carsData.map((item, index) => (
                            <tr key={index}>
                                  <td><label>{item.isAvilable}</label></td>
                                <td><label>{item.price}</label></td>
                                <td><label>{item.licenseNumber}</label></td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
             <input placeholder="הכנס מספר רישוי" onBlur={(e) =>{setcarlicenseNumber(e.target.value)}}></input>
    {/*  {carsData.filter(x=>x.licenseNumber==*/}
    <button onClick={del}>הסרה מהמאגר</button>
    <button onClick={all}>
                <FontAwesomeIcon icon={faExternalLinkAlt} style={{ transform: "rotate(-45deg)" }} /> חזרה לניהול
            </button>
        </div>






    {/* Outlet - מגדיר היכן תטען קומפוננטת הילד */}
    {/* <Outlet></Outlet> */}
    {/* {carsData.map((item, index) => */}
        {/* <div key={index}> */}
           {/* <label>{item.licenseNumber}</label> - <label>{item.seatsNumber}</label> - <label>{item.price}</label> */}
            {/* <button onClick={() => show(index)}>show details</button> */}
        {/* </div> */}
    {/* )} */}
   

</>
}