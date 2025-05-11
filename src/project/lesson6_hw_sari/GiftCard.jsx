import './style.css'

export const GiftCard=(props)=>{
const  {name, min, amount, from, bless, event, moreBless}=props
let topic;
if(event=="wedding")
    topic="חתונה"
else if(event=="baby")
    topic="הולדת התינוק"
else if(event=="birthday")
    topic="יום הולדת"
else  
    topic="יום נישואין"
return <>
<div className='div'>
    <h1 className='title'>{`${name }   `}
    {min==1&&amount==1&&"היקר"}
    {min==2&&amount==1&&"היקרה"}
    {min==2&&amount>1&&"היקרות"}
    {min==1&&amount>1&&"היקרים"}
    </h1>

    <h2>{`מזל טוב ל${topic}`}</h2>

    <h4 className='bless'>{bless}</h4>
    <h4 className='bless'>{moreBless}</h4>
    
    <h5 className='from'> מכל ה  💗 {from} </h5>
    <img src={`${process.env.PUBLIC_URL}/pic/${event}.jpg`} className="img"></img>

    
</div>
</>
}