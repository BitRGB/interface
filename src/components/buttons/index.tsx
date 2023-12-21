import { FC, ReactNode } from "react";
import styled from "styled-components";


export const ButtonBase = styled.button`
    border:none;
    padding: 0;
    letter-spacing: 0;
    outline: none;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    background-color: #105dff;
    width: 200px;
    height: 44px;
    font-size: 16px;
    font-weight: 500;
    color:#fff;
    cursor: pointer;
    gap:10px;
    &:disabled{
        opacity: 0.5;
        cursor: not-allowed;
    }
`

interface ILinearButtonProps {
    children?: ReactNode
    disabled?: boolean
    onClick?: () => void
}
export const LinearButton: FC<ILinearButtonProps> = ({ children, disabled = false, onClick }) => {
    return (
        <Wrapper onClick={onClick} disabled={disabled}>
            <Inner>
                {children}
            </Inner>
        </Wrapper>
    )
}

const Wrapper = styled.button`
    border-radius: 8px;
    width:100%;
    height:100%;
    border-radius: 8px;
    background:linear-gradient(to bottom, #105dff, #fbf459);
    box-sizing: border-box;
    padding:1px;
    cursor: pointer;
    border:none;
    outline: none;
    &:disabled{
        background:#979797;
        cursor: not-allowed;
        opacity: 0.5;
    }
`
const Inner = styled.div`
    height: 100%;
    width:100%;
    background-color:#161B22;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-size: 14px;
    text-transform: capitalize;
    color: #feffff;
    border-radius: 8px;
    gap:10px;
`

export const TextButton = styled.span`
    cursor: pointer;
    font-size: 13px;
    line-height: 1.23;
    color: #f9ee0e;
`