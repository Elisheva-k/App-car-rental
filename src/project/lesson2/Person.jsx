import './style.css'

// export function Person({ name, age }) {
// props - שם מקובל
export function Person(props) {

    // props - properties - מאפיינים
    // const props = { name: 'Sara', age: 4 }
    
    // const name = props.name
    // const age = props.age

    // ריאקט אוספת את כל האטטריביוטים ששלחנו בטעינת הקומפוננטה
    // לאובייקט ג'סון שמכיל את המפתחות כמו שמות האטטריביוטים ואת הערכים שלהם במקביל
    // כדי לשלוף את הערכים נוכל להגדיר משתנים בתוך סוגריים מסולסלות
    // עם שמות המפתחות של האטטריביטוטס
    // תחלץ את הערכים בהתאמה - אין חשיבות לסדר, חובה לתת שמות תואמים JS

    const { age, name } = props
    
    // if (age >= 9)
    //     return <>
    //         <h2>~~~~~~~~~~~~~~~~~~~~~~~~~</h2>
    //         <h3>name: {name}</h3>
    //         <h3>age: {age}</h3>
    //         <h4>הידד! אני יכול לחצות את הכביש לבד👍😁🚗</h4>
    //         <h2>~~~~~~~~~~~~~~~~~~~~~~~~~</h2>
    //     </>
    // else {
    //     return <>
    //         <h2>~~~~~~~~~~~~~~~~~~~~~~~~~</h2>
    //         <h3>name: {name}</h3>
    //         <h3>age: {age}</h3>
    //         <h2>~~~~~~~~~~~~~~~~~~~~~~~~~</h2>
    //     </>
    // }

    return <>
        {console.log('props', props)}
        <h2>~~~~~~~~~~~~~~~~~~~~~~~~~</h2>
        {/* {name && <h3>name: {name}</h3>} */}
        {<h3>name: {name}</h3>}
        {
            // תנאי
            name != undefined && name.length > 4
                ? // אם מתקיים
                <h4>שם ארוך</h4>
                : // אם לא מתקיים
                <h4>שם קצר</h4>
        }
        <h3>age: {age}</h3>
        {
            age >= 9 && <Message></Message>
        }
        <h2>~~~~~~~~~~~~~~~~~~~~~~~~~</h2>
    </>
}

Person.defaultProps = {
    name: 'Annonymous',
    age: 0
}

function Message() {
    return <>
        <h4>הידד! אני יכול לחצות את הכביש לבד👍😁🚗</h4>
        <h4>אני כבר גדול מאוד</h4>
    </>
}