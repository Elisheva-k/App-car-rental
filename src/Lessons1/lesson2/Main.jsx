import { Box, Message } from "./Box";
import { List } from "./List";

export function Main() {
    return <>
        <Box width={20} height={30} length={15}></Box>
        <Box desc={'aaaaaaaa'}></Box>
        <List></List>
    </>
}