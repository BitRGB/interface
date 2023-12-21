import { ICON_SEARCH } from "assets";
import { ChangeEvent } from "react";
import styled from "styled-components";

interface IProps {
    value?: string
    onChange?: (val: string) => void
}
export const Search = ({ value, onChange }: IProps) => {
    const handleValueChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
        onChange?.(value)
    }
    return (
        <Wrapper>
            <Icon src={ICON_SEARCH} />
            <Text placeholder="Search By Event ID" value={value} onChange={handleValueChange} />
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width:100%;
    height: 100%;
    border-radius: 5px;
    border: solid 1px rgba(255, 255, 255, 0.1);
    background-color: #141c25;
    box-sizing: border-box;
    padding:0 20px;
    display: flex;
    align-items: center;
    gap:20px;
`

const Icon = styled.img`
    width:20px;
    height:20px;
    cursor: pointer;
`
const Text = styled.input`
    flex:1;
    width:100%;
    outline: none;
    border: none;
    background-color: transparent;
    font-size: 14px;
    color: #fff;
    &::placeholder{
        color: #85898b;
    }
`