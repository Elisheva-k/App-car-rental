import { Fruit, List } from "./List"
import { List2 } from "./perso"
import { Person } from "./Person"

export const Main = () => {
    return <>
        {/* attributes */}
        {/* key=value */}
        {/* הערכים יהיו מחרוזות */}
        {/* אם רוצים להציב ערך שונה ממחרוזת - נעטוף בסוגריים מסולסלות */}
        {/* <Person name='Sara' age={4} phone='0583269854'></Person>
        <Person name='Rivka' age={20}></Person>
        <Person name='Rachel' age={13}></Person>
        <Person age={8}></Person>
        <Person name={'Leah'}></Person> */}

        {/* <Fruit name={'apple'} color={'red'}></Fruit> */}
        <List></List>
        <List2></List2>
        <Person></Person>
    </>
}