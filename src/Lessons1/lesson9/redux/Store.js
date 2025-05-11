/// immer - ספריה שמטפלת במשתנים קונסטיים
import { produce } from 'immer'
import { createStore } from 'redux';

// redux
// יצירת מערכת לשמירת המשתנים הגלובליים של הפרויקט
// כל קומפוננטה תוכל לגשת אליהם
// לקרוא, להוסיף, לשנות, למחוק...

//1.
// initialState - סטייט מאותחל
// שם מקובל - לא חובה
// אובייקט ג'סון שיכיל את כל המשתנים הגלובליים
const initialState = {
    // רשימת המשתמשים לא תהיה מאותחלת כאן
    // אלא במסד הנתונים
    users: [
        { username: 'Lis', email: 'lis2004@gmail.com', password: '2004' },
        { username: 'Esty', email: 'esty@gmail.com', password: 'esty' },
        { username: 'Tovi', email: 'tovi8392@gmail.com', password: '8392' },
        { username: 'Efrat', email: 'efrat8720@gmail.com', password: '8720' },
        { username: 'Elisheva', email: 'eli72006@gmail.com', password: '2006' },
    ],
    currentUser: {},
    products: [
        { name: 'sunhat', price: '15' },
        { name: 'ice cream', price: '10' },
        { name: 'watermelon', price: '20' },
        { name: 'tawel', price: '20' },
        { name: 'tube', price: '10' },
        { name: 'sunglasses', price: '10' },
        { name: 'goggles', price: '10' }
    ]
}

// 3.
// reducer - פונקציה שמטפלת בכל השינויים של הסטייט
// מקבלת שני ארגומנטים:
// 1. callback פונקציית 
// 2. state - הסטייט שעליו רוצים להפעיל את השינויים
const reducer = produce((state, action) => {
    switch (action.type) {
        case 'SET_CURRENT_USER':
            state.currentUser = action.payload
            return;

        case 'ADD_USER':
            state.users.push(action.payload)
            return;

        case 'ADD_PRODUCT':
            state.products.push(action.payload)
            return;

        case 'DELETE_PRODUCT':

            return;

        default:
            break;
    }
}, initialState)

// 4. store
const store = createStore(reducer)
export default store