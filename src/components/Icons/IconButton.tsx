import styled, { keyframes } from "styled-components";
import { ICON_REFRESH } from "assets";
import { useState } from "react";

export const RefreshButton = ({ onClick }: { onClick?: () => void }) => {
    let [index, setIndex] = useState(0)
    const handleRefresh = () => {
        setIndex(++index)
        onClick?.()
    }
    return (
        <Wrapper onClick={handleRefresh}>
            <Icon src={ICON_REFRESH} key={index} />
        </Wrapper>
    )
}

const Wrapper = styled.button`
    width: 40px;
    height: 40px;
    border-radius: 5px;
    border: solid 1px rgba(255, 255, 255, 0.1);
    outline: none;
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    user-select: none;
`
const Animation = keyframes`
    100%{
        transform: rotate(360deg);
    }
`
const Icon = styled.img`
    width:18px;
    height: 18px;
    animation: ${Animation} 0.5s linear forwards;
   
`