import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Outlet, useNavigate } from "react-router-dom"
import { addCar } from "../redux/Action"
import { Nav } from "./arnav";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'; // Icons for buttons

export const Hachzarot = () => {
    const navigate = useNavigate()
            const hachzarot= useSelector(x => x.hachzarot)
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
                        <th>יתרת ליטרים</th>
                        <th>תאריך החזרה</th>
                        <th>קוד ההשאלה</th>
                    </tr>
                </thead>
                <tbody>

                    
                {hachzarot.map((item, index) =>
                            <tr key={index}>
                                <td><label>{item.litersNow}</label></td>
                                <td><label>{item.datel.slice(0, 10)}</label></td>
                                <td><label>{item.idHas}</label></td>
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


