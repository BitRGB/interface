import { ReactNode } from "react";
import styled from "styled-components";
import { BUTTON_BG } from "../../assets";

export default ({ children, onClick }: { children: ReactNode, onClick: () => void }) => {
    return (
        <Button onClick={onClick}>
            {children}
        </Button>
    )
}

const Button = styled.div`
    cursor: pointer;
    width:183px;
    height:46px;
    display:flex ;
    align-items:center ;
    justify-content:center;
    user-select: none;
    background-image:url(${BUTTON_BG}) ;
    background-size:cover ;
`