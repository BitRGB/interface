import { useEffect, FormEvent, useRef } from "react";
import styled from "styled-components";

interface IProps {
    value: string
    min: string
    max: string
    onChange?: (val: string) => void
}

export const Range = ({ value = "1", min, max, onChange }: IProps) => {
    const ref = useRef<HTMLInputElement>(null)
    const handleInput = (event: any) => {
        const tempSliderValue = event.target.value;
        onChange?.(tempSliderValue)
    }
    const getRatio = () => {
        const Max = Number(max)
        const Min = Number(min)
        const total = Max - Min
        const Value = Number(value || min)
        const ratio = ((Value - Min) / total) * 100
        return ratio
    }

    return (
        <Wrapper>
            <RangeInput bsize={getRatio()} value={value} min={min} max={max} onInput={handleInput} ref={ref} />
        </Wrapper>
    )
}

const Wrapper = styled.div`
    @media screen and (max-width:960px){
        flex:1;
    }
`
const RangeInput = styled.input.attrs({
    type: "range"
}) <{ bsize: number }>`
    width: 315px;
    height: 3px;
    border-radius: 5px;
    background:rgba(216,217,42,0.2);
    background-image: linear-gradient(#f9ee0e, #f9ee0e);
    -webkit-appearance: none;
    appearance: none;
    cursor: pointer;
    outline: none;
    background-repeat: no-repeat;
    background-size: ${({ bsize }) => bsize}% 100%;
    &::-webkit-slider-thumb {
            -webkit-appearance: none;
            appearance: none;
            height: 16px;
            width: 16px;
            border: solid 3px #d7d92b;
            background-color: #999c01;
            border-radius: 50%;
            transition: .2s ease-in-out;
        }
    &::-webkit-slider-runnable-track{
        -webkit-appearance: none;
        box-shadow: none;
        border: none;
        background: transparent;
    }
    &::-webkit-slider-thumb:hover {
        box-shadow: 0 0 0 10px rgba(215,217,43,0.2);
    }
    @media screen and (max-width:960px){
        width:100%;    
    }
`