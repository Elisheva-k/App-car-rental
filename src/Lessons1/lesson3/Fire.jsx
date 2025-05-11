import SelectWoods from "./SelectWoods"

export const Fire = () => {

    // const name = 'Sara'
    // const n1 = `Sara`
    // const n3 = 'my name is: ' + name
    // const n2 = `my name is: ${name} ${n1} how nice!!!!`

    return <>
        <SelectWoods></SelectWoods>
        <img style={{ width: '30vw', height: 'auto', float: 'right', padding: '0 20vw' }} src={`${process.env.PUBLIC_URL}/fire.jpg`}></img>
    </>
}

// export - ייצוא
// import - ייבוא

// ייצוא מאפשר שימוש בקטעי קוד שכתובים בדף נפרד
// שתי דרכים לייצא:
// 1. ייצוא של כל הדף - ייצוא ברירת מחדל

// const Comp2 = () => {
//     return <>
//     </>
// } 

// ייצוא ברירת מחדל של הדף
// export default Comp2

// 2. ייצוא של קטע קוד- קומפוננטה - ייצוא פרטי

// export const Comp = () => {
//     return <>
//     </>
// }

// export function Comp3() {
//     return <>
//     </>
// }

// צורת הייצוא משנה את צורת הייבוא
// 1. אם ייצאנו כברירת מחדל - נייבא ללא סוגריים מסולסלות
// 2. אם ייצאנו כל קומפוננטה בנפרד - נייבא בתוך סוגריים מסולסלות