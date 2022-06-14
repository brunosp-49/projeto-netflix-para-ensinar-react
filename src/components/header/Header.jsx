import { MainContainer } from "./HeaderStyle";
import { useSelector } from "react-redux";

export function Header(){
    const state = useSelector((state) => state.page.value2)

    return(
        <MainContainer>
            <p>{state.data.title}</p>
        </MainContainer>
    )
}