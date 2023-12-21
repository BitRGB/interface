import styled from "styled-components";
import { createPortal } from 'react-dom'
import { ICON_DOC, ICON_PHONE_CLOSE } from "../assets";
import { useLocation, useNavigate } from "react-router-dom";
import { START_BUILD_LINK } from "../config";


interface IProps {
    onClose: () => void
    show: boolean
}
export default ({ onClose, show }: IProps) => {
    const { pathname } = useLocation()
    const onNavigate = useNavigate()
    const handleInnerNavigate = (url: string) => {
        onNavigate(url)
        onClose()
    }
    const handleOutNavigate = (url: string) => {
        window.open(url, "_blank")
    }
    const Content = <>
        <Mask className={show ? "active" : ""} onClick={onClose}></Mask>
        <Wrapper show={show} className={show ? "active" : ""}>
            <Header>
                <Close src={ICON_PHONE_CLOSE} onClick={onClose} />
            </Header>
            <Menu>
                <Item
                    className={pathname == "/" ? "select" : ""}
                    onClick={() => handleInnerNavigate("/")}
                >
                    <MenuText>Home</MenuText>
                </Item>
                <Item
                    className={pathname == "/vision" ? "select" : ""}
                    onClick={() => handleInnerNavigate("/vision")}
                >
                    <MenuText>The Vision</MenuText>
                </Item>
                <Item onClick={() => handleOutNavigate(START_BUILD_LINK)}>
                    <MenuText>DOC</MenuText>
                    <Icon src={ICON_DOC} />
                </Item>
            </Menu>
        </Wrapper>
    </>
    return (
        createPortal(Content, document.body)
    )
}

const Mask = styled.div`
    position: fixed;
    top:0;
    right: 0;
    z-index: 998;
    left: 0;
    bottom: 0;
    transition: all 0.2s linear;
    display: none;
    background-color: rgba(255,255,255,0);
    &.active{
        display: block;
    }
`
const Wrapper = styled.div<{ show: boolean }>`
    position: fixed;
    width: 75%;
    background: rgba(0,0,0,0.6);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter:blur(10px);
    height: 100vh;
    right:-75%;
    top:0;
    bottom:0;
    z-index: 999;
    transition: all 0.3s linear;
    &.active{
       right: 0;
    }
`
const Header = styled.header`
    display: flex;
    justify-content: flex-end;
    width:100%;
    margin-top: 24px;
    padding:0 16px;
    box-sizing: border-box;
`
const Close = styled.img`
    cursor: pointer;
    width:32px;
    height: 32px;
    display: inline-block;
`

const Menu = styled.ul`
    width: 100%;
    list-style: none;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    margin-top: 60px;
    padding:0 16px;
`
const MenuText = styled.span`
    font-family: AvenirNext;
    font-size: 16px;
    font-weight: 800;
    line-height: 1.5;
    color: rgba(255,255,255,0.6);
`
const Item = styled.li`
    cursor: pointer;
    width:100%;
    height: 56px;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    padding:0 24px;
    justify-content: space-between;
    user-select: none;
    &.select{
        background: rgba(0,0,0,0.2);
        border-radius: 8px;
    }

    &.select ${MenuText}{
        color:#fff;
    }

`
const Icon = styled.img`
    width:14px;
    height: 14px;
`
