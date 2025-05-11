export const Select = props => {

    // list - רשימת הבחירה
    // set - הצבת הערך הנבחר במשתנה
    const { list, set, text } = props

    return <>
        {/* צרי קומפוננטת שתחליף את קומפוננטות הבחירה */}
        {/* קומפוננטה גלובלית שמתאימה לבחירת ערך מתוך רשימה ושמירתו במשתנה */}
        {/* כך שנוכל למחוק לגמרי את שתי הקומםוננטות שיצרנו בשיעור */}

        <h4>בחר {text}:</h4>
        <select onChange={(e) => set(e.target.value)}>
            <option selected disabled>בחר {text}</option>
            {/* מעבר על מערך האטרקציות */}
            {/* עבור כל אטרקציה נטען אלמנט אפשרות */}
            {list.map((item, index) =>
                <option key={index} value={item}>
                    {item}
                </option>
            )}
        </select>
    </>
}