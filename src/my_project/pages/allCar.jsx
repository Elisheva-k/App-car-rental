import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import './design.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPlus, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'; // Icons for buttons

///////פונקציה לתצוגת כל הרכבים///////
export const Carsss = () => {
    const navigate = useNavigate()
    const carsData = useSelector(x => x.carsData)

    // פונקציה לניווט לדף הוספת רכב
    const add = () => {
        navigate('/addC')
    }
    
    // פונקציה לניווט לדף מחיקת רכב
    const del = () => {
        navigate('/delC')
    }
    
    // פונקציה לניווט לדף ניהול
    const all = () => {
        navigate('/nihul')
    }
    
    return (
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
            <button onClick={add}>
                <FontAwesomeIcon icon={faPlus} /> הוספת רכב
            </button>
            <button onClick={del}>
                <FontAwesomeIcon icon={faTrash} /> מחיקת רכב
            </button>
            <button onClick={all}>
                <FontAwesomeIcon icon={faExternalLinkAlt} style={{ transform: "rotate(-45deg)" }} /> חזרה לניהול
            </button>
        </div>
    )
}
