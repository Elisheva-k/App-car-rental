import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Outlet, useNavigate } from "react-router-dom"
import { addCar } from "../redux/Action"
import { Nav } from "./arnav";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'; // Icons for buttons

export const Hashalot = () => {
    const navigate = useNavigate()
            const hashalot= useSelector(x => x.hashalot)
            const dis = useDispatch() 
            const all = () => {
                navigate('/nihul')
            }
            return <>
    <br></br>
    <br></br>
    <div className="table-container">
            <table>
                <thead>
                    <tr>
                        <th>תאריך השאלה</th>
                        <th>מספר רישוי</th>
                        <th>קוד ההשאלה</th>
                    </tr>
                </thead>
                <tbody>

                    
                {hashalot.map((item, index) =>
                            <tr key={index}>
                                <td><label>{item.dateH.slice(0, 10)}</label></td>
                                <td><label>{item.licenseNumber}</label></td>
                                <td><label>{item.id}</label></td>
                            </tr>
                    )}
                </tbody>
            </table>           
            <button onClick={all}>
                <FontAwesomeIcon icon={faExternalLinkAlt} style={{ transform: "rotate(-45deg)" }} /> חזרה לניהול
            </button>
        </div>
   </>
}


