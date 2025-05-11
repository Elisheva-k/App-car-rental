import './style.css'
// import wedding from './pic/'
// import trip from './pic/trip.jpg'
// import barMitzva from './pic/barMitzva'
// import babyGirl from './pic/babyGirl'
// import babyBoy from './pic/babyBoy'

export const Card = props => {

    const { addressee, gender, single, sender, wishes, moreWishes, type } = props

    // const babyBoy={
    //     backgroundImage: 'url(./pic/babyBoy.jpg)'
    // }

    // const myStyle = {
    //     backgroundImage: pic 
    // }


    return <>
        <div className={`${type} card`}>
            <div className='wish'>
                <p>ל {addressee}</p>
                {single && gender == 'male' && <p>!!!היקרות</p>}
                {single && gender == 'male' && <p>!!!היקרה</p>}
                {single && gender == 'female' && <p>!!!היקרים</p>}
                {single && gender == 'female' && <p>!!!היקר</p>}
                <br></br>
                <p>{wishes}</p><br></br>
                <p>{moreWishes}</p>
                <br></br>
                <p>Sincerely {sender}</p>
            </div>
        </div>
    </>

}