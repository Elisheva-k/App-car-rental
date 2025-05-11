// פונקציות אנונימיות
// פונקציות ללא שם
// פונקציות חץ
() => {
    console.log('lambda function');
}

// פונקציה אנונימית - אין לי איך להפעיל - זה יוצר שגיאה
// לכן נציב אותה במשתנה
const func = () => {
    return 5;
}

console.log(func());

// שליחת פרמטרים - בתוך הסוגריים
const f1 = (x, y) => {
    return x * y;
}

console.log(f1(7, 4));

const f2 = x => {
    return x * x;
}

console.log(f2(5));

const f3 = (num, func) => {
    if (func() > num)
        console.log('func');
    else {
        console.log('num');
    }
}

function f4() {
    let n = Math.floor(Math.random() * 100)
    console.log(n);
    return n
}

f3(50, f4)

const f5 = (x, y, func) => {
    if (func(x) > y)
        console.log('x');
    else {
        console.log('y');
    }
}

// function f6(num) {
//     return num * num
// }

// f5(32, 4, f6)

f5(32, 4, (num) => {
    return num * num
})