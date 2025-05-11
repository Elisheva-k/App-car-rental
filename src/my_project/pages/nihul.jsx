import './design.css'
import { Nav } from "./arnav";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListUl, faListOl, faCar } from '@fortawesome/free-solid-svg-icons'; // Updated icons for "השאלות" and "החזרות"

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

    return (
        <>
            <Nav />
            <div>
                <button onClick={hash}>
                    <FontAwesomeIcon icon={faListUl} />  השאלות
                </button>
                <button onClick={hach}>
                    <FontAwesomeIcon icon={faListOl} />  החזרות
                </button>
                <button onClick={all}>
                    <FontAwesomeIcon icon={faCar} />  כל הרכבים
                </button>
            </div>
        </>
    );


}



