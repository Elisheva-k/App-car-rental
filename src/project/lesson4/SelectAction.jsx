export const SelectAction = (props) => {

    // actions - מערך האטרקציות השייכות לסוג הנבחר
    // setAction - פונקציית עריכת האטרקציה הנבחרת
    const { actions, setAction } = props

    return <>
        <h4>בחר אטרקציה:</h4>
        <select onChange={(e) => setAction(e.target.value)}>
            <option selected disabled>בחר אטרקציה</option>
            {/* מעבר על מערך האטרקציות */}
            {/* עבור כל אטרקציה נטען אלמנט אפשרות */}
            {actions.map((item, index) =>
                <option key={index} value={item}>
                    {item}
                </option>
            )}
        </select>
    </>
}