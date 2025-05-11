// import React from "react"

export function Person(props) {

    // js
    // var - גלובלי וניתן לשינוי
    // let - לוקאלי ונין לשינוי
    // const - לוקאלי ואינו ניתן לשינוי


    // const name = "Sara"
    // const age = 18

    // props = { name: "Sara", age: 18 }

    // const personName = props.name
    // const age = props.age

    // json - js
    // שמות המשתנים זהים לשמות המפתחות באובייקט
    const { age, name } = props

    return (
        <>
            {/* <React.Fragment> */}
            {/* <div> */}
            <h3>~~~~~~~~~~~~~~~~~~~~~~~~~~</h3>
            {/* HTML שרשור משתנים בתוך קוד */}
            {/* בתוך סוגריים */}
            {/* <h3>{props.name}</h3>
            <h3>{props.age}</h3> */}
            {/* <h3>{personName}</h3> */}
            <h3>{name}</h3>
            <h3>{age}</h3>
            <h3>~~~~~~~~~~~~~~~~~~~~~~~~~~</h3>
            {/* </div> */}
            {/* </React.Fragment> */}
        </>
    )
}

function f() {
    let x = 5
    let y = 8
    return x * y
}

function f2(x, y) {
    return x * y
}