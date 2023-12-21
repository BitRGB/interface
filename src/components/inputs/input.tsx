import { ChangeEvent, ReactNode } from "react";
import styled from "styled-components";

interface IInputProps {
    value?: string
    placeholder?: string
    onChange?: (val: string) => void
    right?: ReactNode
    disabled?: boolean
    error?: string
    type?: string
}

export const Input = ({ value, placeholder, onChange, right, disabled = false, error, type = "text" }: IInputProps) => {
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
        onChange?.(value)
    }
    return (
        <>
            <Wrapper className={error ? "error" : ""}>
                <TextInput value={value} type={type} placeholder={placeholder} onChange={handleChange} disabled={disabled} />
                {
                    right
                }
            </Wrapper>
            <ErrorText>{error}</ErrorText>
        </>
    )
}

const Wrapper = styled.div`
    width:100%;
    height:100%;
    box-sizing: border-box;
    border-radius: 5px;
    border: solid 1px rgba(255, 255, 255, 0.1);
    background-color: #1b2531;
    padding:0 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap:10px;
    &.error{
        border: solid 1px #ec511d;
    }
`

const TextInput = styled.input`
    border: none;
    background: transparent;
    outline: none;
    flex:1;
    width:100%;
    font-size: 16px;
    color: #fefefe;
    &::placeholder{
        color: #999;
    }
`
const ErrorText = styled.div`
    margin-top: 5px;
    font-size: 14px;
    color: #ec511d;
`