import { Link, NavLink } from 'react-router-dom';
import './design.css';
import { faStar, faEnvelope, faWheelchair, faPhone, faCar, faClipboardCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSelector } from 'react-redux';

export const Nav = () => {
    const user = useSelector(x => x.currentUser);

    return (
        <div className="nav">
            <FontAwesomeIcon icon={faWheelchair} className='link'/>
            <NavLink to={user.username === "אלישבע" && '/nihul'} className='link'>
                {user.username === "אלישבע" && <><FontAwesomeIcon icon={faStar} /> ניהול</>}
            </NavLink>
            <NavLink to={["אהובה", "דיצהלה", "נחמי", "אילה", "בינה", "שירה", "גילה"].includes(user.username) && '/ashava'} className='link'>
                {["אהובה", "דיצהלה", "נחמי", "אילה", "בינה", "שירה", "גילה"].includes(user.username) && <><FontAwesomeIcon icon={faEnvelope} /> החזרת רכב</>}
            </NavLink>
            <NavLink to={user.username !== "אלישבע" && '/contact'} className='link'>
                {user.username !== "אלישבע" && <><FontAwesomeIcon icon={faPhone} />  ליצירת קשר </>}
            </NavLink>
            <NavLink to='/home' className='link'><><FontAwesomeIcon icon={faCar} />  כל הרכבים </></NavLink>
            <NavLink to='/ashava' className='link'><><FontAwesomeIcon icon={faClipboardCheck} />  החזרת רכב </></NavLink>
            <NavLink to='/odot' className='link'><FontAwesomeIcon icon={faEnvelope} />  אודות </NavLink>
            {user.username && <p className='username'> שלום ל{user.username}</p>}
        </div>
    );
}
