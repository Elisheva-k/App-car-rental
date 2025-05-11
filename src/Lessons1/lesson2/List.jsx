import { Box } from "./Box"

export const List = () => {

    const arr = [
        { desc: 'קופסת שימורים', width: 10, height: 15, length: 10 },
        { desc: 'קופסת נעליים', width: 20, height: 25, length: 40 },
        { desc: 'קופסת ההפתעות', width: 14, height: 70, length: 12 },
        { desc: 'קופסת אחסון', width: 20, height: 8, length: 30 },
        { desc: 'קופסת גפרורים', width: 3, height: 1, length: 5 },
    ]

    return <>
        {/* map - פונקציה שעוברת על מערך וממפה את האיברים */}
        {/* ביטוי למבדא */}
        {arr.map((item) => <Box desc={item.desc} width={item.width} length={item.length} height={item.height}></Box>)}
    </>
}

// foreach(x in arr){
//     console.log(x.desc);
// }