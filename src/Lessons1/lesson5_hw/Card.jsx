import Shabbat from './image/Shabbat.jpg'
import './style.css'

export const Card = (props) => {

    const {
        // נמען
        addresse,
        // מוען
        sender,
        // מין
        gender,
        single,
        bless,
        type,
        moreBlessing,
        img
    } = props

    return <>
        <div className={`card ${type}`}>
            <label>{addresse} </label>
            {single && gender == "male" && <label>היקר!</label>}
            {!single && gender == "male" && <label>היקרים!</label>}
            {single && gender == "female" && <label>היקרה!</label>}
            {!single && gender == "female" && <label>היקרות!</label>}
            <p className="main">{bless}</p>
            <p className='more'>{moreBlessing}</p>
            <img src={Shabbat} className='img'></img>
            <p className='footer'>מכל הלב, </p><br></br>
            <p className='footer'>{sender}</p>
        </div>
    </>
}