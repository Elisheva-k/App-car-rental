export const Shopping = (props) => {

    const { item, add } = props

    return <>
        <h4>הזמנתך בוצעה בהצלחה!</h4>
        <h4>פרטי ההזמנה: {item} בתוספת {add} 🎂🍰🧁</h4>
        <h4>מקווים שנהנית משירותינו... 👍😜</h4>
    </>
}