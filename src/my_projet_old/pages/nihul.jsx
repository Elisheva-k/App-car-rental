import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addCar } from "../redux/Action"
import { Carsss } from "./allCar"
import { Nav } from "./arnav";
import { useNavigate } from "react-router-dom";

export const Nbuttons = () => {
    const navigate = useNavigate()

        const all = () => {
                navigate('/allCar')
            
        }
        const hash = () => {
            navigate('/hashalot')
        
    } 
    const hach = () => {
        navigate('/hachzarot')
    
}
    return <>
        <Nav></Nav>
        <div>
            <button onClick={hash}>השאלות</button>
            <button onClick={hach}>החזרות</button>
            <button onClick={all}>כל הרכבים</button>
        </div>
    </>

}



