import { Card } from "./Card"
import Shabbat from './image/Shabbat.jpg'

export const Main = () => {
    return <>
        <Card
            addresse={'מרים'}
            sender={'שייני'}
            gender={'female'}
            single={true}
            bless={'שבת שלום ומבורך!!!'}
            type={'shabbat'}
            moreBlessing={'שתזכי לנצל את השעות בהתרוממות הרוח (ולא לשינה) סתםםםםםםםםםםם'}
            img={Shabbat}
        ></Card>
    </>
}