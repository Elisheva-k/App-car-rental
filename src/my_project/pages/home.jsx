import './design.css'
import { useDispatch, useSelector } from "react-redux";
import { Nav } from "./arnav";
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { FormInvent } from './formInvent';
//////דף הבית///////
export const Home = () => {
    const [carD, setCarD] = useState(null)
    const carsData = useSelector(store => store.carsData)
    const degemRechev = useSelector(x => x.degemRechev)
    const navigate = useNavigate()
    const carli = () => {
        navigate('/homeMesunan')
    }

    return <>
        <Nav></Nav>
        <button className="amazing-button" onClick={carli}>!חפש את הרכב הקרוב</button>
        <div id="container">
            {carD != null && <FormInvent car={carD}></FormInvent>}
            {carsData.map((item, index) =>
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
                </div>
            )}

        </div>
    </>
}

