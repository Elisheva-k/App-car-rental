// פונקציות אנונימיות

// פונקציה בלי שם
() => {
    console.log(2222222222);
}
// לא ניתן להפעיל פונקציה אנונימית - ולכן א"א לכתוב כך
// ()

// ניתן להציב את הפונקציה במשתנה ונפעיל דרך שם המשתנה
const f = () => {
    console.log(111);
}
f();
// result - 111

const func = () => { return 5; }
func();

console.log(func());
// result - 5

// פונקציה שלא מקבלת פרמטרים - חובה לשים סוגריים עגולות ריקות
// אם הפונקציה מקבלת פרמטר אחד ויותר - נשים אותם בתוך הסוגריים
const f1 = (x, y) => {
    return x + y
}

console.log(f1(5, 7));

// אם הפונקציה מקבלת אך ורק פרמטר אחד - אפשר לוותר על הסוגריים
const f2 = x => {
    return x * x
}

console.log(f2(4));

// אם הפונקציה מבצעת רק פעולה אחת - אין צורך בסוגריים מסולסלות
// בהחזרה זה לא עובד
const f3 = x => console.log(x);

f3(8)

const f4 = (num, func) => {
    if (func() > num) {
        return true
    }
    else {
        return false
    }
}

const f5 = () => {
    return Math.floor(Math.random() * 10)
}

console.log(f5());