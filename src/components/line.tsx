import { FC } from "react";
import styled from "styled-components";
import { ICON_CROSS, ICON_CROSS1 } from "../assets";

interface ILineProps {
    isTop?: boolean
    height?: string
    className?:string
}
export const Line: FC<ILineProps> = ({ isTop = true, height="100%",className }) => {
    return (
        <Wrapper className={className}>
            <Img src={isTop ? ICON_CROSS1 : ICON_CROSS} isTop={isTop} />
            <Vline height={height} />
        </Wrapper>
    )
}

const Wrapper = styled.div`
    position: absolute;
    z-index: 5;
    left:35px;
    bottom:0;
    top:0;
    @media screen and (max-width:960px){
        display: none;
    }
`
const Img = styled.img<{ isTop: boolean }>`
    width:10px;
    display: block;
    height: ${({ isTop }) => isTop ? "5px" : "10px"};
`
const Vline = styled.div<{ height: string }>`
    margin-left: 5px;
    height: ${({ height }) => height};
    width: 1px;
    background-color: rgba(255,255,255,0.1);
`