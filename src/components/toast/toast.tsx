import { ICON_ERROR, ICON_SUCCESS } from "assets";
import { FC, useEffect, useRef, useState } from "react";
import styled, { keyframes } from "styled-components";

interface IToastProps {
    text: string,
    type: "success" | "error",
    interValue?: number,
    visible: boolean,
    onClose: () => void
}
export const ToastComponent: FC<IToastProps> = ({ visible, text, type = "success", interValue = 5000, onClose }) => {
    const [open, setOpen] = useState(visible)
    const [leave, setLeave] = useState(false)
    const Ref = useRef<HTMLDivElement>(null)
    let timer: number
    useEffect(() => {
        if (visible) {
            setOpen(true)
        }
    }, [visible])
    useEffect(() => {
        timer = window.setTimeout(() => {
            handleClose()
        }, interValue)
        if (Ref.current) {
            Ref.current?.addEventListener("animationend", handleAnimationEnd)
        }
        return () => {
            if (timer) {
                clearTimeout(timer)
            }
            if (Ref.current) {
                Ref.current.removeEventListener("animationend", handleAnimationEnd)
            }
        }
    }, [interValue, Ref, leave])
    const handleAnimationEnd = () => {
        if (leave) {
            setOpen(false)
            onClose()
        }
    }
    const handleClose = () => {
        setLeave(true)
    }

    if (!open) {
        return null;
    }
    return (
        <Wrapper ref={Ref} className={`${leave ? "leave" : ""} ${type == "error" ? "error" : ""}`}>
            <Icon src={type == "success" ? ICON_SUCCESS : ICON_ERROR} />
            <Text className={type == "error" ? "error" : ""}>{text}</Text>
        </Wrapper>
    )
}

const animation = keyframes`
    0%{
        top:-150px;
    }
    100%{
        top:100px;
    }
`
const animation1 = keyframes`
    0%{
        top:100px;
    }
    100%{
        top:-150px;
    }
`
const Wrapper = styled.div`
    padding: 10px 15px;
    border-radius: 5px;
    border: solid 1px #15ff96;
    min-width: 120px;
    max-width: 300px;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    gap:15px;
    position: fixed;
    background-color: #0d121a;
    top:-150px;
    left:50%;
    transform: translateX(-50%);
    z-index: 999999;
    animation: ${animation} 0.5s linear forwards;
    &.error{
        border: solid 1px #df544c;
    }
    &.leave{
        animation: ${animation1} 0.8s linear forwards;
    }
`
const Text = styled.span`
    font-family: Montserrat-Regular;
    font-size: 14px;
    line-height: 1.33;
    color: #15ff96;
    text-transform: capitalize;
    flex:1;
    width:100%;
    &.error{
        color:#df544c;
    }
`
const Icon = styled.img`
    width:16px;
    height:16px;
    cursor: pointer;
`