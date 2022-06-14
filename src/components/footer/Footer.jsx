import React from "react";
import { MainContainer } from "./FooterStyle";
import { useSelector } from 'react-redux'

function Footer(){
    const page = useSelector((state) => state.page.value)

    return(
        <MainContainer>
            <p>FULLFLIX ® 2022, Todos os direitos reservados. | {page}</p>
        </MainContainer>
    )
}

export default Footer;