import { ReactNode } from "react";
import styled from "styled-components";

export const Tip = ({ children }: { children?: ReactNode }) => {
    return (
        <Wrapper>
            {
                children
            }
        </Wrapper>
    )
}

const Wrapper = styled.div`
    box-sizing: border-box;
    padding:15px;
    border-radius: 8px;
    border: solid 1px #585301;
    background-color: #141c25;
    font-size: 14px;
    line-height: 1.43;
    letter-spacing: normal;
    color: #f9ee0e;
`
