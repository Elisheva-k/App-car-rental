import './style.css'
// import bar from './images/barMitzva.jpg'
// import calla from './images/Kallah.jpg'
// import baby from './images/41039.jpg'
// import hol from './images/birthday-10-768x593.jpg'

const picDict = {
    "wedding": 'Kallah',
    "bar": 'barMitzva',
    "holyday": 'hol',
    "baby": '41039'
}

export const Card = props => {
    const { name, min, sorm, bless, morebless, sendname, type } = props
    return <>
        {
            <div className={type}>
                <lable>לכבוד {name}
                    {min === "זכר" && sorm === "רבים" && " היקרים!!"}
                    {min === "זכר" && sorm === "יחיד" && " היקר!!"}
                    {min === "נקבה" && sorm === "רבים" && " היקרות!!"}
                    {min === "נקבה" && sorm === "יחיד" && " היקרה!!"}</lable>
                <div>{bless}</div>
                {morebless && <div>{morebless}</div>}
                <div>{sendname}</div>
                {/* <img src={picDict[type]} style={{ width: '250px', height: '300px' }}></img> */}
                <img src={`${process.env.PUBLIC_URL}/images/${picDict[type]}.jpg`} style={{ width: '250px', height: '300px' }}></img>
            </div>

        }</>
}