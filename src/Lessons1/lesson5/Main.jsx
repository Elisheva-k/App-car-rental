import { Cakes } from "./Cakes"
import { Wedding } from "./Wedding"

export const Main = () => {
    return <>
        <Wedding></Wedding>
        <h1>Cakes For The Bar:</h1>
        <ul>
            <li><Cakes name={'Miriam'} cake={'Kalla Cake'}></Cakes></li>
            <li> <Cakes name={'Rivky'} cake={'Mousse'} amount={100}></Cakes></li>
            <li><Cakes name={'Michal'} cake={'herself'}></Cakes></li>
        </ul>
    </>
}