import './design.css'
import { Nav } from "./arnav";
import { Outlet, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {addHchz} from '../redux/Action'
import {delHash} from '../redux/Action'
import { useState } from 'react';
import {setStatusTrue} from '../redux/Action'


export function Ashava(){
    const [hchz, sethchz] = useState({id:'6',date:  {day: 30, month: 5, year: 2021}, time: {hour:19,minute:15}, toPay: 'funcPay', shul: 'true'})
    const navigate = useNavigate()
    const [hash, sethash] = useState()
    const [car, setCar] = useState()
    const hashalot= useSelector(x => x.hashalot)
    const carsData= useSelector(x => x.carsData)
    //licenummber,id
    // { id: '1', idHas: '1', date:  {day: 30, month: 5, year: 2021}, time: {hour:19,minute:15}
    //, litersNow: '28', toPay: 'funcPay', shul: 'true' },
     // {, idHas: '1'
     
    const dis = useDispatch()
    const send = () => {
        dis(setStatusTrue(hash))
        dis(delHash(hash))
        dis(addHchz(hchz))
         navigate('/pay')
          }
   
    const user = useSelector(x => x.currentUser)
    let arr = hashalot.filter(x => x.userId == user.password)
    if (arr.length > 0) {
        return<>
    <Nav></Nav>
    <div className="form">
    <h2>שלום ל{user.username}</h2>
    <h1 className='big'>?ברוך שובך! איך היתה הדרך</h1>
    <br></br>
        <label className="lblH"></label>        <br></br>

        <input className="lblH" placeholder="...הכנס קוד השאלה"
        onBlur={(e) =>sethchz({...hchz,idHas:e.target.value})}></input>
        <br></br>

        <label className="lblH"></label>
        <br></br>
        <input className="lblH" placeholder="...מספר רישוי"
        onBlur={(e) =>{sethash(e.target.value)}}></input><br></br>
        <label className="lblH"></label>
        <br></br>
        <input className="lblH" placeholder="...כמה דלק נשאר"
        onBlur={(e) => sethchz({ ...hchz,litersNow:e.target.value })}></input>
        <br></br>
        <button onClick={send}>לתשלום</button>        <br></br>
        </div>
    </>
    }

    else{    console.log(hchz);

        return<>
        <Nav></Nav>
        <h1>...לצערנו עוד לא זכית לשכור כאן רכב </h1>
        <h2>אף פעם לא מאוחר! </h2>

   </>
    }
}