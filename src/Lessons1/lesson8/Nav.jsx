import { Link, NavLink } from 'react-router-dom'
import './style.css'

export const Nav = () => {
    return <>
        <div className='nav'>
            {/* ניגש לשרת */}
            {/* <a href="home" className='link'>Home</a> */}
            {/* <a href="login" className='link'>Login</a> */}
            {/* <a href="welcome" className='link'>Welcome</a> */}

            {/* Link - תגית ניתוב של ריאקט */}
            {/* כל הפרויקט נטען בפעם הראשונה והגישה היא לוקאלית */}
            {/* to - לאיזה ניתוב ננתב */}
            {/* של הראוטינג path מקביל ל  */}
            {/* <Link to={'home'} className='link'>Home</Link> */}
            {/* <Link to={'login'} className='link'>Login</Link> */}
            {/* <Link to={'welcome'} className='link'>Welcome</Link> */}

            {/* active אם יש קלאס */}
            {/* יודע לזהות את הקלאס ולהחיל אותו על הלינק הפעיל NavLink */}
            <NavLink to={'home'} className='link'>Home</NavLink>
            <NavLink to={'login'} className='link'>Login</NavLink>
            {/* <NavLink to={'welcome'} className='link'>Welcome</NavLink> */}
            <NavLink to={'products'} className='link'>Products</NavLink>
        </div>
    </>
}