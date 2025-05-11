
export const Card = (props) => {

    const {
        // נמען
        name,
        // מוען
        sender,
        // מין
        gender,
        single,
        bless,
        type,
        moreBlessing,
        // img
    } = props

    return <>
    <div className={`card ${type}`}>
        <label>{name} </label>
        {single=="יחיד" && gender == "זכר" && <label>היקר!</label>}
        {single=="רבים" && gender == "זכר" && <label>היקרים!</label>}
        {single=="יחיד" && gender == "נקבה" && <label>היקרה!</label>}
        {single=="רבים" && gender == "נקבה" && <label>היקרות!</label>}
        <p className="main">{bless}</p>
        <p className='more'>{moreBlessing}</p>
        {/* <img src={Shabbat} className='img'></img> */}
        <p className='footer'>מכל הלב, </p><br></br>
        <p className='footer'>{sender}</p>
    </div>
</>

}