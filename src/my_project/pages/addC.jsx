import { useState } from "react";
import './design.css';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addCar } from "../redux/Action";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

////////פונקציה להוספת רכב//////////
export const AddC = () => {
    const navigate = useNavigate();
    const carsData = useSelector(x => x.carsData);
    const [carit, setCar] = useState({});

    const dis = useDispatch();

    // פונקציה להוספת רכב למאגר
    const add = () => {
        dis(addCar(carit));
    }

    // פונקציה לחזרה לעמוד ניהול
    const all = () => {
        navigate('/nihul');
    }

    return (
        <>
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
                                    <td><label>{item.isAvilable ? 'תפוס' : 'פנוי'}</label></td>
                                    <td><label>{item.price}</label></td>
                                    <td><label>{item.licenseNumber}</label></td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>

                <input className="styled-input" placeholder="הכנס מספר רישוי" onBlur={(e) => setCar({ ...carit, licenseNumber: e.target.value })}></input>
                <input className="styled-input" placeholder="הכנס מספר מושבים" onBlur={(e) => setCar({ ...carit, seatsNumber: e.target.value })}></input>
                <input className="styled-input" placeholder="הכנס מחיר לשעה" onBlur={(e) => setCar({ ...carit, price: e.target.value })}></input>
                <input className="styled-input" placeholder="הכנס עיר" onBlur={(e) => setCar({ ...carit, city: e.target.value })}></input>
                <input className="styled-input" placeholder="הכנס רחוב" onBlur={(e) => setCar({ ...carit, street: e.target.value })}></input>
                <input type="file" className="styled-input" accept="image/*" onChange={(e) => setCar({ ...carit, pic: URL.createObjectURL(e.target.files[0]) })}></input>
                <br></br>
                <button onClick={add}>הוסף למאגר</button>
                <br></br>
                <button onClick={all}>
                    <FontAwesomeIcon icon={faExternalLinkAlt} style={{ transform: "rotate(-45deg)" }} /> חזרה לניהול
                </button>
            </div>
        </>
    );
}
