import { Link, NavLink } from 'react-router-dom'
import './style.css'
import { useSelector } from 'react-redux'

export const Nav = () => {

    const user = useSelector(x => x.currentUser)

    return <>
        <div className='nav'>
            {user.username && <label className='username'>{user.username}</label>}
            <NavLink to={'register'} className='link'>Register</NavLink>
            <NavLink to={'login'} className='link'>Login</NavLink>
            <NavLink to={'products'} className='link'>Products</NavLink>
        </div>
    </>
}