// npm i redux
// npm i react-redux
import { produce } from 'immer'
import { createStore } from 'redux';

// 1.
// initialState - סטייט מאותחל
// בסטייט נגדיר את כל המשתנים הגלובליים
// שם מקובל - לא חובה
const initialState = {
    users: [
        { username: 'Avigail', email: 'avi6009@gmail.com', password: '6009' },
        { username: 'Chedvi', email: 'c4039@gmail.com', password: '4039' },
        { username: 'Chani', email: 'chani8621@gmail.com', password: '8621' },
        { username: 'Malki', email: 'm5711@gmail.com', password: '5711' },
        { username: 'Shulamit', email: 'shb7101@gmail.com', password: '7101' },
        { username: 'Brachi', email: 'b5222@gmail.com', password: '5222' }
    ],
    currentUser: {},
    // כרגע נמלא כאן - בהמשך נמלא ע"י קריאת שרת
    products: [
        { name: 'עוגיות אוראו', amount: '10 חבילות' },
        { name: 'אייס קפה', amount: '4 בקבוקים' },
        { name: 'לחם שום', amount: '1 קג' },
        { name: 'רוטב פיצה', amount: '2 בקבוקים' },
        { name: 'חסה', amount: '2 חבילות' }
    ],
    shoppingCart: []
}

// 3. 
// reducer - אחראי על שינוי הסטייט
// שם מקובל - לא חובה
// produce הרצה של הפונקציה 
// מקבלת שני ארגומנטים:
// 1. פונקציית חץ
// 2. הסטייט שעליו נפעיל את השינויים

const reducer = produce((state, action) => {
    switch (action.type) {
        case 'SET_CURRENT_USER':
            state.currentUser = action.payload
            break;
        case 'ADD_PRODUCT':
            state.products.push(action.payload);
            break;
        case 'DELETE_PRODUCT':
            state.products.splice(action.payload, 1)
            break;
        default:
            break;
    }
}, initialState)

// 4. 
// store - אובייקט מוגמר של הרדיוסר והסטייט
const myStore = createStore(reducer)
window.store = myStore
export default myStore;