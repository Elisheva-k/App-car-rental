// 2.
// actions - פעולות של שינויים שנרצה להפעיל על הסטייט
// הגדרה של הפעולה

export const setCurrentUser = (user) => {
    // type - מחרוזת שמגדירה איזה פעולה רוצים לעשות
    // מקובל לכתוב באותיות גדולות
    // payload - parameters
    return { type: 'SET_CURRENT_USER', payload: user }
}

export const addProduct = (product) => {
    return { type: 'ADD_PRODUCT', payload: product }
}

export const deleteProduct = (index) => {
    return { type: 'DELETE_PRODUCT', payload: index }
}