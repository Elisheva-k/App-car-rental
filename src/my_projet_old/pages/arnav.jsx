import { Link, NavLink } from 'react-router-dom'
import './design.css'

import { useSelector } from 'react-redux'

export const Nav = () => {

    const user = useSelector(x => x.currentUser)
console.log(user)
    return <>

        <div className="nav">
            <NavLink to={user.username == "אלישבע" && '/nihul'} className='link'>{user.username == "אלישבע" && 'ניהול'}</NavLink>
            <NavLink to={user.username != "אלישבע" && '/contact'} className='link'>{user.username != "אלישבע" && 'ליצירת קשר'}</NavLink>
            <NavLink to='/home' className='link'>תצוגת הרכבים</NavLink>
            <NavLink to='/odot' className='link'>אודות</NavLink>
           {user.username && <p className='username'> שלום ל{user.username}</p>}
        </div>
    </>
}