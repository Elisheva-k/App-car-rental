import './design.css'
import { useNavigate } from "react-router-dom";
import { Nav } from "./arnav";
export function KimatFinish(){
    const navigate = useNavigate()
    const more = () => {
        navigate('/home')
    
}
const finish = () => {
    navigate('/finish')

}
    return<>
    <button onClick={more}>?בא לך השכרה נוספת</button><br></br>
    <button onClick={finish}>🔚 לסיום ויציאה</button>
    </>
    }