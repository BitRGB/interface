import { ChangeEvent } from "react";
import styled from "styled-components";

interface ITextProps {
    value?: string
    placeholder?: string
    onChange?: (val: string) => void
    disabled?: boolean
    rows?: number
    error?: string
}

export const TextArea = ({ value, placeholder, onChange, disabled, rows, error = "" }: ITextProps) => {
    const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const value = e.target.value
        onChange?.(value)
    }
    return (
        <>
            <Wrapper className={error ? "error" : ""}>
                <Textarea rows={rows} value={value} placeholder={placeholder} onChange={handleChange} disabled={disabled} ></Textarea>
            </Wrapper>
            <ErrorText>{error}</ErrorText>
        </>
    )
}

const Wrapper = styled.div`
    width:100%;
    border-radius: 5px;
    border: solid 1px rgba(255, 255, 255, 0.1);
    background-color: #1b2531;
    box-sizing: border-box;
    padding:15px;
    &.error{
        border: solid 1px #ec511d;
    }
`

const Textarea = styled.textarea`
    border:none;
    outline: none;
    background-color: transparent;
    font-size: 16px;
    color: #fefefe;
    width:100%;
    &::placeholder{
        color: #999;
    }
`
const ErrorText = styled.div`
    margin-top: 5px;
    font-size: 14px;
    color: #ec511d;
`