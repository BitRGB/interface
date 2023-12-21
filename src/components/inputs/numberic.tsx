import { ICON_DOWN_HOVER, ICON_DOWN_NORMAL, ICON_UP_HOVER, ICON_UP_NORMAL } from "assets";
import { ChangeEvent, useEffect, useState } from "react";
import styled from "styled-components";

interface IProps {
    value?: string
    onChange?: (val: string) => void
    min: string
    max: string
}
export const Numberic = ({ value = "1", onChange, min, max }: IProps) => {
    const [hoverUp, setHoverUp] = useState(false)
    const [hoverDown, setHoverDown] = useState(false)
    const [currentValue, setCurrentValue] = useState(value)

    useEffect(() => {
        const minAmount = parseFloat(min)
        const maxAmount = parseFloat(max)
        const cValue = parseFloat(value)
        let v = cValue
        if (cValue < minAmount) {
            v = minAmount
        } else if (cValue > maxAmount) {
            v = maxAmount
        }
        setCurrentValue(v.toString())
    }, [value, min, max])
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
        onChange?.(value)
    }

    const handleSetStep = (type: "up" | "down") => {
        let v = parseFloat(value)
        const minAmount = parseFloat(min)
        const maxAmount = parseFloat(max)
        if (type == "up") {
            if (v >= maxAmount) {
                v = maxAmount
            } else {
                v += 1
            }
        } else {
            if (v <= minAmount) {
                v = minAmount
            } else {
                v -= 1
            }
        }
        setCurrentValue(v.toString())
        onChange?.(v.toString())
    }
    return (
        <Wrapper>
            <Input value={currentValue} onChange={handleChange} type="number" min={min} max={max}/>
            <Container>
                <Icon
                    onClick={() => handleSetStep("up")}
                    src={hoverUp ? ICON_UP_HOVER : ICON_UP_NORMAL}
                    onMouseOver={() => setHoverUp(true)}
                    onMouseOut={() => setHoverUp(false)}
                />
                <Icon
                    onClick={() => handleSetStep("down")}
                    src={hoverDown ? ICON_DOWN_HOVER : ICON_DOWN_NORMAL}
                    onMouseOver={() => setHoverDown(true)}
                    onMouseOut={() => setHoverDown(false)}
                />
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width: 130px;
    height: 60px;
    box-sizing: border-box;
    padding:0 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 5px;
    border: solid 1px rgba(255, 255, 255, 0.1);
    background-color: #222b39;
`

const Input = styled.input`
    flex:1;
    width:100%;
    border: none;
    outline: none;
    background-color: transparent;
    font-size: 18px;
    color: #feffff;

`
const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap:5px;
`
const Icon = styled.img`
    width:8px;
    height:8px;
`