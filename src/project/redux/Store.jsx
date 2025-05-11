const initialState = {
    typeUsers: [
       { id: 1, type: "מנהל" },
       { id: 2, type: "משתמש" }
    ],
    
    currentUser: {},
    // כרגע נמלא כאן - בהמשך נמלא ע"י קריאת שרת

    users: [
        { id, userName, tz, cellPhone, creditCardNumber, tokef, cvv, typeUsers }
    ],

    carType: [
        { id: 1, description: "פרטי" },
        { id: 2, description: "סטיישן" },
        { id: 3, description: "משפחתי" },
        { id: 4, description: "בימבה" },
        { id: 5, description: "מנהלים" },
        { id: 6, description: "ג'יפ" },
        { id: 7, description: "ג'יפון" },
        { id: 8, description: "מסחרי" },
        { id: 9, description: "מיניבוס" }
    ],

    driveType: [
        { id: 1, description: "דלק", costForLitter: "24 $💲"},
        { id: 2, description: "סולר", costForLitter: "30 $💲"},
        { id: 3, description: "גז", costForLitter: "18 $💲"},
        { id: 4, description: "חשמל", costForLitter: "15 $💲"},
        { id: 5, description: "היברידי", costForLitter: "22 $💲"}
    ]
   
}
