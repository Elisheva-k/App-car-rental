import pic1 from './images/IMG_0875.JPG'
// import pic2 from './images/IMG_0912.JPG'
import pic3 from './images/IMG_1067.JPG'
import pic4 from './images/IMG_6861.JPG'

import './style.css'

export const Album = () => {

    // const list = [pic1, pic2, pic3, pic4]

    const arr = [
        { name: 'Blumi', pic: 'IMG_0912' },
        { name: 'Batya', pic: 'IMG_0886' },
        { name: 'Brachi', pic: 'IMG_0921' },
        { name: 'Efraim', pic: 'IMG_1749' }
    ]

    return <>
        <div className='album'>
            {/* {list.map((item, i) => <Image key={i} src={item}></Image>)} */}
            {arr.map((item, i) => <Image key={i} src={item.pic} name={item.name}></Image>)}
        </div>

    </>
}

export const Image = props => {

    const { src, name } = props

    return <>
        <p>{name}</p>
        {/* src עמ להציג תמונה יש לייבא את קובץ התמונה ולתת כארטריביוט של */}
        <img src={pic1} className='img'></img>
        {/* ניתן לשמור את התמונות בתיקיית הקבצים הסטטיים של הפרויקט */}
        {/* ואז לנתב לפי הניתוב הבא */}
        {/* <img src={process.env.PUBLIC_URL + '/images/' + src + '.JPG'} alt={name} className="img"></img> */}
        {/* <img src={`${process.env.PUBLIC_URL}/images/${src}.JPG`} alt={name} className="img"></img> */}
    </>
}