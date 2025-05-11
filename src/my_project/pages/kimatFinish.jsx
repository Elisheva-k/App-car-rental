import './design.css';
import { useNavigate } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.css';

/////לפני יציאה////
export function KimatFinish() {
    const navigate = useNavigate();

    const more = () => {
        navigate('/home');
    };

    const finish = () => {
        navigate('/finish');
    };

    return (
        <>
            <button className="amazing-button" onClick={more}>
                <i className="fas fa-plus-circle"></i> בא לך השכרה נוספת
            </button>
            <br />
            <button className="amazing-button" onClick={finish}>
                <i className="fas fa-sign-out-alt"></i> לסיום ויציאה
            </button>
        </>
    );
}