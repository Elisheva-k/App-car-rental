import React from 'react'
import { Card } from "./cards"
// import bar from'../homework3א_תמוז/images/barMitzva.jpg'
// import calla from'../homework3א_תמוז/images/Kallah.jpg'
// import baby from'../homework3א_תמוז/images/41039.jpg'
// import hol from'../homework3א_תמוז/images/birthday-10-768x593.jpg'
// import { SelectType} from "./homework2/SelectType"
export function Main() {
    return <>

        <h1>הזמנות</h1>
        <p>
            <Card name={"תמר"}
                min={"נקבה"}
                sorm={"יחיד"}
                bless={'אני מזמינה אותך לחתונה!!!'}
                morebless={"ברכות לרב!!!"}
                sendname={'ממלכי'}
                type={"wedding"}
                // imgg={<img src={wedding} style={{ width: '250px', height: '300px' }} />}
                >
            </Card>

        </p></>

}