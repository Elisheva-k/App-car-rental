import { User } from "./User"

export function List() {
    
    const users = [
        { name: 'Ayala', email: 'aaa@a', password: '12345', phone: '8494433374' },
        { name: 'Batya', email: 'bbb@b', password: '1235', phone: '8494433374' },
        { name: 'Chana', email: 'ccc@c', password: '12345', phone: '' },
        { name: 'Dina', email: 'ddd@d', password: '12345', phone: '8494433374' }
    ]

    return <>
        {/* map - פונקציה שעוברת על מערך וממפה את האיברים */}
        {/* ביטוי למבדא */}
        {users.map((item) => <User myname={item.name} email={item.email} password={item.password} phone={item.phone}></User>)}
    </>

}

// delgates - מצביעים לפונקציות

// const f1 = (item) => {
//     console.log(item.name);
// }

// function map(func) {
//     for (i = 0; i < arr.length; i++) {
//         func(arr[i])
//     }
// }

// arr.map(f1)

// arr.map(x => { console.log(x.name) })