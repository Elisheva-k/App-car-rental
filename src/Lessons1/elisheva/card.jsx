import './style.css'

export const Card = props => {

    const { name, sender, single,girl, wishes, moreWishes, type} = props

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
                {single  && gender == 'male' && <p>!!!היקרה</p>}
                {single  && gender == 'female' && <p>!!!היקרים</p>}
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