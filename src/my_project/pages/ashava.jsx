import './design.css'
import { Nav } from "./arnav";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from 'react';
import swal from "sweetalert"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSadTear } from '@fortawesome/free-solid-svg-icons';
import { addHchz } from '../redux/Action'
import { delHash } from '../redux/Action'
import { setStatusTrue } from '../redux/Action'
/////פונקציה להשבת רכב///////
export function Ashava() {
    const [hchz, sethchz] = useState({ id: '6', date: { day: 30, month: 5, year: 2021 }, time: { hour: 19, minute: 15 }, toPay: 'funcPay', shul: 'true' })
    const navigate = useNavigate()
    const [hash, sethash] = useState()
    const [car, setCar] = useState()
    const [hashNow, setHashNow] = useState()
    const [carhNow, setcarhNow] = useState()
    const hashalot = useSelector(x => x.hashalot)
    const carsData = useSelector(x => x.carsData)
    const dis = useDispatch()
    const user = useSelector(x => x.currentUser)
    let arr = hashalot.filter(x => x.userId == user.password)
    console.log(arr)


    const ok = () => {
        dis(setStatusTrue(hash))
        dis(delHash(hash))
        dis(addHchz(hchz))
        //תאריך השאלה לרכב נוכחי
        let rentDate = '2024-09-04T11:10:30.154';
        rentDate = hashalot.find(item => item.id === hashNow) ? hashalot.find(item => item.id === hashNow).dateH : '2024-09-04T12:08:30.154';
        //מחיר השאלה לרכב הנוכחי
        let HourPay = carsData.find(item => item.licenseNumber === carhNow) ? carsData.find(item => item.licenseNumber === carhNow).price : 25;
        //תאריך נוכחי  
        const now = new Date()
        const currentDateTimeISO = now.toISOString()
        //המרה לאובייקט תאריך
        const dateObj1 = new Date(rentDate);
        const dateObj2 = new Date(currentDateTimeISO)
        const diffInMs = dateObj2 - dateObj1
        const diffInHours = (diffInMs / 3600000);
        const roundedDiffInHours = diffInHours.toFixed(2);
        const endPay = roundedDiffInHours * HourPay;
        swal(`סך הכל לתשלום ${endPay}`, "!!!נסיעה בטוחה", 'success')
        navigate('/pay')
    }
    // +//כמות הליטרים שהייתה ברכב פחות הכמות שברכב בשעת ההחזרה
    // *//מחיר לליטר דלק
    if (arr.length > 0) {
        return <>
            <Nav></Nav>
            <div className="form">
                <h2>שלום ל{user.username}</h2>
                <h1 className='big'>?ברוך שובך! איך היתה הדרך</h1>
                <br></br>
                <label className="lblH"></label>        <br></br>
                <input
                    className="lblH"
                    placeholder="...הכנס קוד השאלה"
                    onBlur={(e) => {
                        sethchz({ ...hchz, idHas: e.target.value });
                        setHashNow(e.target.value);
                    }}
                ></input>
                <br></br>

                <label className="lblH"></label>
                <br></br>
                <input className="lblH" placeholder="...מספר רישוי"
                    onBlur={(e) => { sethash(e.target.value) && setcarhNow(e.target.value) }}>
                </input><br></br>
                <label className="lblH"></label>
                <br></br>
                <input className="lblH" placeholder="...כמה דלק נשאר"
                    onBlur={(e) => sethchz({ ...hchz, litersNow: e.target.value })}></input>
                <br></br>
                <br></br>
                <button className="btn" onClick={ok}>לאישור הפרטים</button>
                <br></br>
                <br></br>
            </div>

        </>

    }

    else {
        return <>

            <Nav></Nav>
            <h1 className='p3'>...לצערנו עוד לא זכית לשכור כאן רכב</h1>
            <FontAwesomeIcon className='faSad' icon={faSadTear} />

            <h2 className='p2'>:)אף פעם לא מאוחר</h2>
        </>
    }
}