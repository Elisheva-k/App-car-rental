import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Outlet, useNavigate } from "react-router-dom"
import { addCar } from "../redux/Action"
import { Nav } from "./arnav";
export const AddC = () => {
    const navigate = useNavigate()
    const carsData = useSelector(x => x.carsData)
    const [carit, setCar] = useState()

    const dis = useDispatch()

    const add = () => {
        dis(addCar(carit))
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
        <input placeholder="הכנס מספר רישוי" onBlur={(e) => setCar({ ...carit, licenseNumber: e.target.value })}></input>
        <input placeholder="הכנס מספר מושבים" onBlur={(e) => setCar({ ...carit, seatsNumber: e.target.value })}></input>
        <input placeholder="הכנס מחיר לשעה" onBlur={(e) => setCar({ ...carit, price: e.target.value })}></input>
        <input placeholder="הכנס עיר" onBlur={(e) => setCar({ ...carit, city: e.target.value })}></input>
        <input placeholder="הכנס רחוב " onBlur={(e) => setCar({ ...carit, street: e.target.value })}></input>
        <input type="file" accept="image/*" onChange={(e) =>setCar({...carit,pic: URL.createObjectURL(e.target.files[0])})}></input>
        <button onClick={add}>הוסף למאגר</button>
        <button onClick={all}>חזרה לניהול</button>

    </>
}


