// 2. actions - פעולות לשינוי הסטייט

export const setCurrentUser = (user) => {
    return { type: 'SET_CURRENT_USER', payload: user }
}

export const addUser = (user) => {
    return { type: 'ADD_USER', payload: user }
}

export const addProduct = (product) => {
    return { type: 'ADD_PRODUCT', payload: product }
}

export const removeProduct = (id) => {
    return { type: 'DELETE_PRODUCT', payload: id }
}