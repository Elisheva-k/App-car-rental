import './design.css'
import { useSelector } from "react-redux";
import { Nav } from "./arnav";
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { FormInvent } from './formInvent';

///////דף הבית +סינון לפי מיקום///////////
export const HomeMesunan = () => {
    const [details, setDetails] = useState({})
    const carsData = useSelector(store => store.carsData)
    const [carD, setCarD] = useState(null)
    const degemRechev = useSelector(x => x.degemRechev)
    const navigate = useNavigate()
    const carli = () => {
        navigate('/homeMesunan')
    }
    return <>
        <Nav></Nav>
        {carD != null && <FormInvent car={carD}></FormInvent>}
        <div id="selector">
            <select onClick={(e) => { setDetails({ ...details, city: e.target.value }) }}>
                <option key="1">בחר מיקום</option>
                {carsData.map((item, index) =>
                    <option key={index} value={item.city}>{item.city}</option>
                )}
            </select>
            <select onClick={(e) => { setDetails({ ...details, street: e.target.value }) }}>
                <option key={"1"} value={'all'}>בחר רחוב</option>
                {carsData.map((item, index) => (item.city == details.city ?
                    <option key={index} value={item.street}>{item.street}</option> : "")
                )}
            </select>
        </div>
        {carsData.map((item, index) =>
            ((item.city == details.city && (item.street == details.street//||details.street=='all'
            ) && item.isAvilable == "true") ?
                <div id='card' key={index}>
                    <h3>
                        {degemRechev.map((model) => {
                            if (model.id === item.degemCode) {
                                return (
                                    <div key={model.id}>
                                        {model.company}  {model.model}
                                    </div>
                                );
                            }
                            return null;
                        })}</h3>
                    <p> נמצא בעיר {item.city} <br></br> ברחוב {item.street} <br></br>
                        מספר המקומות {item.seatsNumber} </p>
                    <img src={item.pic} style={{ width: '25vw', height: 'outo' }}></img><br></br>
                    {item.isAvilable != "false" && <button className='green' onClick={index = () => setCarD(item)}>!!אני רוצה עכשיו</button>}
                    {item.isAvilable == "false" && <button className='red'>רכב זה על הכביש</button>}
                </div> : "")
        )}
    </>
}
