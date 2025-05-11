// ייבוא של קובץ עיצוב - רק ניתוב
import './style.css'
// וכו PDF / ייבוא של קובץ אחר - תמונה  
// קוראים לקובץ בשם כלשהו - איך שרוצים ומביאים מהניתוב הרצוי
import MichalKallah from './images/Kallah.jpg'

export const Wedding = () => {

    const s = {
        border: 'double hotpink 8px',
        backgroundColor: 'pink',
        fontSize: '3rem',
        width: '30vw',
        height: 'auto'
    }

    return <>
        {/* inline style */}
        {/* <div style={{ border: 'double hotpink 8px', backgroundColor: 'pink', fontSize: '3rem', width: '30vw', height: 'auto' }}>
            מזל טוב!
            מיכל שלנו כלה!!!
        </div> */}
        {/* <div style={s}>
            מזל טוב!
            מיכל שלנו כלה!!!
        </div> */}
        {/* className - class */}
        <div className='div'>
            מזל טוב!
            מיכל שלנו כלה!!!
            <img src={MichalKallah} style={{ width: '25vw', height: 'auto' }}></img>
        </div>
    </>
}