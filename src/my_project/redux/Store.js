// npm i redux
// npm i react-redux
//import './style.css'
import { produce } from 'immer'
import { createStore } from 'redux';
import { useState } from 'react';


//סוגי משתמשים
const initialState = {
    usersType: [
        { id: 1, type: "מנהל" },
        { id: 2, type: "משתמש" }
    ],
    //משתמשים
    users: [
        { id: '1', username: 'אלישבע', email: 'E@gmail.com', password: '1111', phone: '0533171767', cerditCard: '1111111111111111', validity: '02/24', cvv: '325', userT: '2' },
        { id: '2', username: 'נחמי', email: 'N@gmail.com', password: '2222', phone: '0556762957', cerditCard: '2222222222222222', validity: '02/25', cvv: '252', userT: '1' },
        { id: '3', username: 'אהובה', email: 'A@gmail.com', password: '3333', phone: '0527653046', cerditCard: '33333333333333333', validity: '02/26', cvv: '474', userT: '1' },
        { id: '4', username: 'בינה', email: 'B@gmail.com', password: '4444', phone: '0527653044', cerditCard: '444444444444444444', validity: '02/27', cvv: '332', userT: '1' },
        { id: '5', username: 'גילה', email: 'G@gmail.com', password: '5555', phone: '0527653045', cerditCard: '555555555555555555', validity: '02/28', cvv: '152', userT: '1' },
        { id: '6', username: 'דיצהלה', email: 'D@gmail.com', password: '6666', phone: '0504102076', cerditCard: '66666666666666666', validity: '02/29', cvv: '201', userT: '1' },
        { id: '7', username: 'שירה', email: 'S@gmail.com', password: '7777', phone: '0504137300', cerditCard: '777777777777777777', validity: '02/30', cvv: '787', userT: '1' },
        { id: '8', username: 'אילה', email: 'AYALA@gmail.com', password: '8888', phone: '055267953', cerditCard: '88888888888888888', validity: '02/31', cvv: '965', userT: '1' },

    ],
    currentUser: {},
// cities:[{city:}]
    // כרגע נמלא כאן - בהמשך נמלא ע"י קריאת שרת
    //סוג רכב
    CarsType: [
        { id: '1', type: 'בימבה' },
        { id: '2', type: 'בימבה גוק' },
        { id: '3', type: 'בימבה כיף' },
        { id: '4', type: 'פרטי' },
        { id: '5', type: 'מנהלים' },
        { id: '6', type: 'אופנוע' },
        { id: '7', type: 'משאית' },
    ],
    //דגמי רכב
    degemRechev: [
        { id: '1', company: 'RENO', model: 'Grand Coupé', type: '3' },
        { id: '2', company: 'Audi', model: 'Q3', type: '4' },
        { id: '3', company: 'SUBARO', model: 'Impreza', type: '7' },
        { id: '4', company: 'Toyota', model: 'Corolla', type: '4' },
        { id: '5', company: 'SKODA', model: 'Karoq', type: '1' },
        { id: '6', company: 'NISSAN', model: 'Ariya', type: '2' },
        { id: '7', company: 'HONDA', model: 'HR-V', type: '6' },
        { id: '8', company: 'Mazda', model: 'CX-30', type: '2' },

    ],
    //סוג הנעה
    driveType: [
        { id: '1', type: 'soler', price: '50' },
        { id: '2', type: 'delek', price: '60' },
        { id: '3', type: 'hybrid', price: '30' },
        { id: '4', type: 'electric', price: '20' },
        { id: '5', type: 'gaz', price: '55' },
    ],
    //סוגי גיר
    girType: [
        { id: 1, type: "אוטומטי" },
        { id: 2, type: "ידני" }
    ],

    //פרטי רכב
    ////////////////////////////////////////////////////////////////////////////ככה טוענים תמונות?
    carsData: [
        { id: '1', licenseNumber: '12345678', degemCode: '6', seatsNumber: '8',    pic: `${process.env.PUBLIC_URL}/picture/p1.png`
        , year: '2000', girT: '2', driveT: '5', price: '25', kamash: '20', litersNow: '70', street: 'בבא סאלי', city: 'ביתר', isAvilable: 'true' },
        { id: '2', licenseNumber: '23456789', degemCode: '3', seatsNumber: '8',    pic: `${process.env.PUBLIC_URL}/picture/p2.png`
        , year: '1980', girT: '2', driveT: '1', price: '20', kamash: '30', litersNow: '40', street: 'רבי עקיבא', city: 'בני ברק', isAvilable: 'true' },
        { id: '3', licenseNumber: '34567890', degemCode: '7', seatsNumber: '7',    pic: `${process.env.PUBLIC_URL}/picture/p3.png`
        , year: '2020', girT: '1', driveT: '2', price: '32', kamash: '10', litersNow: '45', street: 'צה"ל', city: 'צפת', isAvilable: 'false' },
        { id: '5', licenseNumber: '45678901', degemCode: '8', seatsNumber: '8',    pic: `${process.env.PUBLIC_URL}/picture/p4.png`
        , year: '2023', girT: '1', driveT: '3', price: '40', kamash: '4', litersNow: '0', street: 'אביי', city: 'נתניה', isAvilable: 'true' },
        { id: '6', licenseNumber: '567890123', degemCode: '6', seatsNumber: '8',    pic: `${process.env.PUBLIC_URL}/picture/p5.png`
        , year: '2000', girT: '2', driveT: '5', price: '25', kamash: '20', litersNow: '70', street: 'אגרות משה', city: 'ביתר', isAvilable: 'true' },
        { id: '7', licenseNumber: '67890123', degemCode: '3', seatsNumber: '8',    pic: `${process.env.PUBLIC_URL}/picture/p6.png`
        , year: '1980', girT: '2', driveT: '1', price: '20', kamash: '30', litersNow: '40', street: 'ירושלים', city: 'נהריים', isAvilable: 'false' },
        { id: '8', licenseNumber: '78901234', degemCode: '5', seatsNumber: '7',     pic: `${process.env.PUBLIC_URL}/picture/p7.png`
        , year: '2020', girT: '1', driveT: '2', price: '32', kamash: '10', litersNow: '45', street: 'לילך', city: 'חיפה', isAvilable: 'false' },
        { id: '9', licenseNumber: '89012345', degemCode: '1', seatsNumber: '8',     pic: `${process.env.PUBLIC_URL}/picture/p8.png`
        , year: '2023', girT: '1', driveT: '3', price: '40', kamash: '4', litersNow: '0', street: 'חבריים', city: 'מצדה', isAvilable: 'false' },
        { id: '10', licenseNumber: '9012344', degemCode: '1', seatsNumber: '8',    pic: `${process.env.PUBLIC_URL}/picture/p13.png`
        , year: '2023', girT: '1', driveT: '3', price: '40', kamash: '4', litersNow: '0', street: 'הטיילת', city: 'נתניה', isAvilable: 'true' },
        { id: '11', licenseNumber: '01234567', degemCode: '6', seatsNumber: '8',    pic: `${process.env.PUBLIC_URL}/picture/p14.png`
        , year: '2000', girT: '2', driveT: '5', price: '25', kamash: '20', litersNow: '70', street: 'קדושת לוי', city: 'ביתר', isAvilable: 'true' },
        { id: '12', licenseNumber: '09876543', degemCode: '3', seatsNumber: '8',    pic: `${process.env.PUBLIC_URL}/picture/p15.png`
        , year: '1980', girT: '2', driveT: '1', price: '20', kamash: '30', litersNow: '40', street: 'שאול המלך', city: 'נהריים', isAvilable: 'false' },
        { id: '13', licenseNumber: '76543210', degemCode: '2', seatsNumber: '7',     pic: `${process.env.PUBLIC_URL}/picture/p16.png`
        , year: '2020', girT: '1', driveT: '2', price: '32', kamash: '10', litersNow: '45', street: 'התמר', city: 'חיפה', isAvilable: 'true' },
        { id: '14', licenseNumber: '74118529', degemCode: '1', seatsNumber: '8',     pic: `${process.env.PUBLIC_URL}/picture/p17.png`
        , year: '2023', girT: '1', driveT: '3', price: '40', kamash: '4', litersNow: '0', street: 'בר כוכבא', city: 'ירושלים', isAvilable: 'true' },
    ],
    currentCarsData: {},
    hashalot: [
        { id: '1', userId: '7777', licenseNumber: '78901234', dateH: '2024-09-03T19:17:30.154' },
        { id: '2', userId: '6666', licenseNumber: '89012345', dateH: '2024-09-03T19:17:30.154' },
        { id: '3', userId: '3333', licenseNumber: '09876543', dateH: '2024-09-03T19:17:30.154' },
        { id: '4', userId: '1111', licenseNumber: '67890123', dateH: '2024-09-04T00:27:30.154' },
        { id: '5', userId: '4444', licenseNumber: '34567890', dateH: '2024-09-03T19:17:30.154' },
    ],
    //מצב שולם
    zminut: [
        { id: true, type: "שולם" },
        { id: false, type: "!!!לא שילמת" }
    ],
    hachzarot: [
        /////////////////////////////////////////////////////////////////////////////////////////////func?
        {id: '1', idHas: '1',datel: '2023-08-05T22:53:30.154' , litersNow: '28', toPay: 'funcPay', shul: 'true' },
        {id: '2', idHas: '2', datel: '2023-08-05T22:53:30.154' , litersNow: '20', toPay: 'funcPay', shul: 'true'},
        {id: '3', idHas: '3',datel: '2023-08-05T22:53:30.154' , litersNow: '0', toPay: 'funcPay', shul: 'true' },
        {id: '4', idHas: '5',datel: '2023-08-05T22:53:30.154' , litersNow: '15', toPay: 'funcPay', shul: 'true' },
        {id: '5', idHas: '6', datel: '2022-09-05T22:53:30.154' , litersNow: '13', toPay: 'funcPay', shul: 'true' },
    ],
}


// 3. 
// reducer - אחראי על שינוי הסטייט
// שם מקובל - לא חובה
// produce הרצה של הפונקציה 
// מקבלת שני ארגומנטים:
// 1. פונקציית חץ
// 2. הסטייט שעליו נפעיל את השינויים


const reducer =produce ((state = initialState, action) => {
    switch (action.type) {
        case 'SET_CURRENT_USER':
            state.currentUser = action.payload
            break;
         case 'SET_CURRENT_CAR':
            state.currentCarsData=action.payload;
            break;
        case 'ADD_CAR':
        const Updatecars=[...state.carsData]
        Updatecars.push(action.payload);
        return{...state, carsData:Updatecars}
            break;
        case 'ADD_HASH':
        const updatedHashalot = [...state.hashalot];
        updatedHashalot.push(action.payload);
        return { ...state, hashalot: updatedHashalot };
            break;
        case 'ADD_HCHZ':
        console.log(action.paylod)
            state.hachzarot.push(action.payload);
            break;
        case 'DEL_HASH':
        const indexToRemove = state.hashalot.findIndex(y => y.licenseNumber === action.payload);
        if (indexToRemove !== -1) {
        const updatedHashalot = [...state.hashalot];
            updatedHashalot.splice(indexToRemove, 1);
         return { ...state, hashalot: updatedHashalot };
     }
        return state;
           break;
        case 'SET_STATUS':
        return {
          ...state,
          carsData: state.carsData.map((car) => {
            if (car.id === action.payload) {
              return {
                ...car,
                isAvilable: 'false', // Update availability status to false
              };
            }
            return car;
          }),
        };
            break;
        case 'SET_STATUS_TRUE':
        return {
            ...state,
            carsData: state.carsData.map((car) => {
              if (car.licenseNumber === action.payload) {
                return {
                  ...car,
                  isAvilable: 'true', // Update availability status to false
                };
              }
              return car;
            }),
          };
            break;
        
        case 'DELETE_CAR':
        const indexToRemove1 = state.carsData.findIndex(w=> w.licenseNumber === action.payload);
        if (indexToRemove1 !== -1) {
        const updatedCars = [...state.carsData];
        updatedCars.splice(indexToRemove1, 1);
         return { ...state, carsData: updatedCars };
     }
        return state;
        // state.carsData.splice( (state.carsData.filter(x => x.licenseNumber == action.payload).id),1);
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