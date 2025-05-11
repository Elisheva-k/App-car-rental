import './design.css'
import { Nav } from "./arnav";
import { useNavigate } from "react-router-dom";
export function Finish(){
    const navigate = useNavigate()
    return<>
    <Nav></Nav>
    <h1 className='big'>...כֹה נאֶה היה לנו יחד</h1>
    <h6 className='p'>👋נתראה בקרוב</h6>
    <h1>...אם: נדע && יהיה לנו כוח && זה יהיה לפני יום חמישי   אז--------נחפש מה יוצר יציאה מהאתר ממש כמו ללחוץ על ה❌ יָאעלָה?  אוווווף, זה מילה של ערבים</h1>
    </>
    }