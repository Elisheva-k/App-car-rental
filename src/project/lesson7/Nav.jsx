import { Link, NavLink } from 'react-router-dom'
import './style.css'

export const Nav = () => {
    return <>
        <div className="nav">
            {/* a - ניגשת לשרת בשביל לקבל את הדף הבא */}
            {/* <a href="/home" className='link'>Home</a> */}
            {/* <a href="/login" className='link'>Login</a> */}
            {/* <a href="/welcome" className='link'>Welcome</a> */}

            {/* Link - תגית של ריאקט */}
            {/* ניתן לגשת לכל הקומפוננטות בצורה לוקאלית SPA כיון שהאתר שלו הוא */}
            {/* to - הניתוב אליו רוצים לגשת */}
            {/* <Link to='/home' className='link'>Home</Link> */}
            {/* <Link to='/login' className='link'>Login</Link> */}
            {/* <Link to='/welcome' className='link'>Welcome</Link> */}

            {/* NavLink - תגית כמו לינק רגיל של ריאקט */}
            {/* משוכללת בעיצוב */}
            {/* active אם יש קלאס עיצובי בשם  */}
            {/* ריאקט תחיל את העיצוב בצורה אוטומטית */}
            <NavLink to='/home' className='link'>Home</NavLink>
            <NavLink to='/login' className='link'>Login</NavLink>
            <NavLink to='/products' className='link'>Products</NavLink>
            {/* <NavLink to='/welcome' className='link'>Welcome</NavLink> */}
        </div>
    </>
}