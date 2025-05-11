// 2.
// actions - פעולות של שינויים שנרצה להפעיל על הסטייט
// הגדרה של הפעולה
export const setCurrentUser = (user) => {
    // type - מחרוזת שמגדירה איזה פעולה רוצים לעשות
    // מקובל לכתוב באותיות גדולות
    // payload - parameters
    return { type: 'SET_CURRENT_USER', payload: user }
}
export const setCurrentCarsData = (car) => {
    debugger
    return { type: 'SET_CURRENT_CAR', payload: car }
}
export const setStatus = (car) => {
    console.log(car)
    debugger
    return { type: 'SET_STATUS', payload: car.id }
}
export const setStatusTrue = (licenseNumber) => {
    debugger
    return { type: 'SET_STATUS_TRUE', payload: licenseNumber }
}
export const delHash = (licenseNumber) => {
    return { type: 'DEL_HASH', payload: licenseNumber }
}
export const addHchz = (hchz) => {
    debugger
    return { type: 'ADD_HCHZ', payload: hchz }
}
export const addCar = (carit) => {
    return { type: 'ADD_CAR', payload: carit }
}
export const addHash = (hash) => {
    return { type: 'ADD_HASH', payload: hash }
}
export const deleteCar = (licenseNumber) => {
    return { type: 'DELETE_CAR', payload: licenseNumber }
}

// export const addCar = (cars) => {
//     return { type: 'ADD_CAR', payload: cars }
// }
// export const setCar = (id) => {
//     return { type: 'set_CAR', payload: id }
// }

// export const deleteCar = (id) => {
//     return { type: 'DELETE_CAR', payload: id }
// }

