// 2.
// actions - פעולות של שינויים שנרצה להפעיל על הסטייט
// הגדרה של הפעולה
export const setCurrentUser = (user) => {
    // type - מחרוזת שמגדירה איזה פעולה רוצים לעשות
    // מקובל לכתוב באותיות גדולות
    // payload - parameters
    return { type: 'SET_CURRENT_USER', payload: user }
}
export const setCarNow = (car) => {
    return { type: 'SET_CAR_NOW', payload: car }
}
export const addCar = (carit) => {
    return { type: 'ADD_CAR', payload: carit }
}
export const deleteCar = (carIndex) => {
    return { type: 'DELETE_CAR', payload: carIndex }
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

