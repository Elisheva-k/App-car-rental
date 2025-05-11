import './design.css'
import { Nav } from "./arnav";
import { useNavigate } from "react-router-dom";
export function Finish() {
    const navigate = useNavigate()
    return <>
        <Nav></Nav>
        < p className='p'>
            אנו שמחים תמיד לתת לך את השירות הטוב ביותר
            <br />
            אם תמָצא תקלה טכנית או צורך ביעוץ
            <br />
            חייג/י למוקד השירות שלנו *8553 ואנו נעשה את כל הדרוש כדי שתצא/י הכי מרוצה שאפשר
            <br />
        </p>
        <h6 className='p'>!!!מחכים כבר להשכרה הבאה שלך</h6>
    </>
}