import { useState } from "react"
import { SelectItem } from "./SelectItem"
import { Input } from "./InputDetails"
import { SelectAdds } from "./SelectAdds"
import { Shopping } from "./ShoppingDeatils"
import { Select } from "./Select"

export const CheeseCakes = () => {

    // dictionary - מילון 
    const dictionary = {
        עוגת_גבינה: ["שוקולד", "כרמל", "ריבת חלב", "לוטוס"],
        גביניות: ["צימוקים", "ריבת חלב", "נוגט"],
        משקאות_חלב: ["שוקו", "בננה", "מוקה", "פונטש", "אייס קפה"],
        עוגיות: ["אלפחורס", "כדורי גבינה", "כדורי ריבת חלב"],
    }
    // let name;
    // let selectedItem;
    // let selectedAdd;

    // שמירת משתנים בסטייט ע"מ שישפיעו על התצוגה
    const [name, setName] = useState("פלוני")
    const [message, setMessage] = useState('')
    const [selectedItem, setSelectedItem] = useState()
    const [selectedAdd, setSelectedAdd] = useState()

    // const useState = (x) => {
    //     // יצירת משתנה
    //     let temp
    //     // אם נשלח ערך התחלתי - הצבה
    //     temp = x
    //     // יצירת פונקציה שאחראית על שינוי המשתנה
    //     // מקבלת ערך ומציבה אותו במשתנה
    //     function set(value) {
    //         temp = value
    //     }
    //     // מחזירה מערך
    //     // האיבר הראשון - המשתנה 
    //     // האיבר השני - פונקצית השינוי
    //     return [temp, set]
    // }

    // // שמירת הערך המוחזר במערך
    // const arr = useState("aaa")
    // // גישה למשתנה
    // let x = arr[0]
    // // גישה לפונקציה - ניתן להפעיל אותה בצורה ישירה
    // arr[1]()
    // let func = arr[1]
    // func()

    // let list = [1, 2, 3, 4, 5, 6]
    // let [a, b, c] = list
    // console.log(a, b, c);

    // let [w, setW] = useState()

    // שליפת כל המפתחות של המילון לתוך מערך
    const cakes = Object.keys(dictionary)
    // הצבת מערך התוספות לפי המוצר שנבחר
    const addList = dictionary[selectedItem]

    // הסבר
    // json
    // const obj = { name: "chana", city: "jerusalem" }
    // שליפת ערך של מפתח
    // 1.
    // obj.name // 'chana'
    // 2.
    // obj['name'] // 'chana'
    // ניתן להציב גם את המפתח בתוך משתנה
    // let temp='name'
    // ואח"כ לשלוף כך -
    // obj[temp] // 'chana'
    // לולאה שעוברת על כל המפתחות של אובייקט מסוים
    // for (const key in obj) {
    //     console.log(obj[key]);
    // }

    const changeName = (value) => {
        if (value.length > 2) {
            setName(value)
            setMessage('')
        }
        else {
            setMessage('שם קצר מידי')
        }
    }

    return <>
        {/* {console.log(cakes)} */}
        <h2>שלום {name}</h2>
        {/* כל עוד לא נבחר שם - נטען את קומפוננטת פרטים אישיים */}
        {name === "פלוני" && <Input setName={changeName}></Input>}
        {message != '' && <h5>{message}</h5>}
        {/* אחרי שנבחר שם - נטען את קומפוננטת בחירת מוצר */}
        {/* {name !== "פלוני" && !selectedItem && <SelectItem cakes={cakes} set={setSelectedItem}></SelectItem>} */}
        {name !== "פלוני" && !selectedItem && <Select arr={cakes} set={setSelectedItem} text={"מוצר"}></Select>}
        {/* אחרי בחירת המוצר - נטען את קומפוננטת בחירת התוספת */}
        {/* {selectedItem && <SelectAdds list={addList} setAdd={setSelectedAdd}></SelectAdds>} */}
        {selectedItem && !selectedAdd && <Select arr={addList} set={setSelectedAdd} text='תוספת'></Select>}
        {selectedAdd && <Shopping item={selectedItem} add={selectedAdd}></Shopping>}
    </>
}