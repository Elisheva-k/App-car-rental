export const SelectType = (props) => {

    // types - מערך סוגי האטרקציות
    // setType - פונקציית עריכת הסוג הנבחר
    const { types, setType } = props

    return <>
        <h4>בחר סוג אטרקציה:</h4>
        {/* בעת בחירת סוג נשמור את הסוג הנבחר */}
        <select onChange={(e)=>setType(e.target.value)}>
            <option disabled selected>בחר סוג</option>
            {/* מעבר על מערך הסוגים */}
            {/* עבור כל סוג נטען אלמנט בחירה */}
            {types.map((x, i) =>
                <option
                    // מפתח ייחודי לכל אלמנט שנוצר ממערך באמצעות מאפ
                    key={i}
                    // ערך של הבחירה
                    value={x}>
                    {/* מה שכתוב בין שתי התגיות - התצוגה */}
                    {x}
                </option>)}
        </select>
    </>
}