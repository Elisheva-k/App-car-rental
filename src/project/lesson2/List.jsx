import './style.css'

export const List = () => {

    const arr = [
        { desc: 'banana', color: 'yellow' },
        { desc: 'pear', color: 'green' },
        { desc: 'peach', color: 'pink' },
        { desc: 'cherry', color: 'red' },
        { desc: 'blueberry', color: 'blue' },
        { desc: 'apple', color: 'gold' }
    ]

    // const f = (item) => {
    //     return <Fruit desc={item.desc} color={item.color}></Fruit>
    // }

    return <>
        {/* arr.map - פונקציה שעוברת על מערך בצורה של פוראיצ' */}
        {/* וממפה כל אחד מהאובייקטים - נותנת לו תצוגה אטמלית */}
        {/* מופעל על שם מערך */}
        {/* {arr.map(f)} */}
        {/* הפונקציה מקבלת שתי משתנים */}
        {/* משתנה ראשון - חובה - האיבר הנוכחי במערך */}
        {/* משתנה שני - אופציונאלי - אינדקס האיבר */}
        {arr.map((item, index) =>
            <Fruit desc={item.desc} color={item.color} key={index}></Fruit>
            // <p>{item.desc} is {item.color}</p>
        )}
    </>
}

// function map(func){
//     for(i=0; i<arr.length; i++){
//         func(arr[i])
//     }
// }

export const Fruit = (props) => {

    const { desc, color } = props

    return <>
        <p className='big'>{desc} is {color}</p>
    </>
}