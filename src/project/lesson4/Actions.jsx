import { useState } from "react"
import { Details } from "./Details"
import { InputName } from "./InputName"
import { InputNum } from "./InputNum"
import { SelectAction } from "./SelectAction"
import { SelectType } from "./SelectType"
import { Select } from "./Select"

export const Actions = () => {

    // הגדרת משתנים שישפיעו על התצוגה
    // כל קומפוננטה שנרצה להכיר לה את אחד המשתנים
    // נשלח אותו כפרופס
    const [name, setName] = useState('אנונימי')
    const [selectedType, setSelectedType] = useState()
    const [selectedAction, setSelectedAction] = useState()
    const [num, setNum] = useState(0)

    // צורת הגדרת מילון
    // dictionary - מילון
    // { 
    //      key1 : [ value1, value2, value3, ...],
    //      key2 : [ value1, value2, value3, ...],
    //      key3 : [ value1, value2, value3, ...],
    // }

    // כל האטרקציות שלנו
    const dictionary = {
        ים: ['טורנדו', 'בננה', 'אבוב', 'שיט'],
        מדבר: ['סוס', 'גיפים', 'סגווי'],
        מסלול: ['נחל עמוד', 'מגרסה', 'בניאס', 'גילבון', 'יגור', 'עין גדי'],
        אטרקציה: ['באולינג', 'לייזר טאג', 'I Jump', 'החלקה על קרח']
    }

    // פונקציה ששולפת את כל המפתחות של אובייקט ג'סון או מילון
    // שליפת סוגי האטרקציות
    const types = Object.keys(dictionary)
    console.log(types);
    // שליפת מערך הערכים של מפתח מסוים
    // שליפת כל האטרקציות השייכות לסוג שנבחר
    // undefined בתחילה יאותחל ב 
    // כיון שעדיין לא בחרנו סוג
    const list = dictionary[selectedType]
    console.log(list);
    // שליפת ערך מתוך אובייקט ג'סון או מילון
    // const p = { name: 'Sara', age: 15 }
    // p גישה לשם של 
    // object.key
    // console.log(p.name);
    // object['key']
    // console.log(p['name']);
    // הצבת שם המפתח במשתנה
    // let temp = 'key'
    // object[temp]
    // let x = 'name'
    // console.log(p[x])
    // for (const x in p) {
    //     console.log(p[x]);
    // }

    // ניתן לשלוח פונקציה עוטפת ולא את הפונקציה המקורית של עריכת המשתנה
    // בעיקר בשביל אבטחה
    // בפונקציה הנוכחית בדקנו שהערך שהתקבל מתאים
    // ורק אם כן הצבנו באמצעות פונקצית העריכה
    const validName = (value) => {
        if (value.length > 1) {
            setName(value)
        }
    }

    return <>
        <h3>שלום {name},</h3>
        {/* {name == 'אנונימי' && <InputName set={setName}></InputName>} */}
        {/* שלחנו לקומפוננטת הזנת השם את פונקצית עריכת השם */}
        {name == 'אנונימי' && <InputName set={validName}></InputName>}
        {/* שלחנו לקומפוננטת בחירת הסוג את מערך הסוגים ואת פונקצית עריכת הסוג הנבחר */}
        {/* {name != 'אנונימי' && !selectedType && <SelectType types={types} setType={setSelectedType}></SelectType>} */}
        {name != 'אנונימי' && !selectedType && <Select list={types} set={setSelectedType} text={'סוג אטרקציה'}></Select>}
        {/* שלחנו לקומפוננטת בחירת האטרקציה את מערך האטרקציות של הסוג הנבחר ואת פונקצית עריכת האטרקציה הנבחרת */}
        {/* {selectedType && !selectedAction && <SelectAction actions={list} setAction={setSelectedAction}></SelectAction>} */}
        {selectedType && !selectedAction && <Select list={list} set={setSelectedAction} text={'אטרקציה'}></Select>}
        {/* שלחנו לקומפוננטת הזנת הכמות את פונקציית עריכת המספר */}
        {selectedAction && num == 0 && <InputNum setNum={setNum}></InputNum >}
        {/* שלחנו לקומפוננטת הפרטים את הכמות, האטרקציה והסוג */}
        {num > 0 && <Details num={num} action={selectedAction} type={selectedType}></Details>}
    </>
}