import { Div } from "./Div";
import { Person } from "./Person";
import { Welcome } from "./Welcome";

export function Main() {
    return (
        <div>
            <Welcome></Welcome>
            <Welcome></Welcome>
            <Welcome></Welcome>
            <Welcome></Welcome>
            <Welcome></Welcome>
            <Div></Div>
            {/* attributes - מאפיינים לקומפוננטה */}
            {/* מקבל ערך מחרוזתי */}
            {/* כל סוג משתנה אחר נקיף בסוגריים מסולסלות */}
            {/* גם מחרוזת ניתן לעטוף בסוגריים */}
            <Person name='Sara' age={18}></Person>
            <Person name={'Rivka'} age={5}></Person>
            <Person name="Rachel" age={32}></Person>
            <Person age={3} name={'Avigail'}></Person>
        </div>
    )
}