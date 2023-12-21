import styled from "styled-components";
import { createPortal } from 'react-dom'
import { ICON_DOC, NAV_NORMAL, NAV_SELECTED } from "assets";
import { useLocation, useNavigate } from "react-router-dom";
import { START_BUILD_LINK } from "config";
import { LinearButton, Toast } from "components";
import { useApplicationState, useDisconnected, useToggleWalletModal } from "store/application";

interface IProps {
    onClose: () => void
    show: boolean
}

export default ({ onClose, show }: IProps) => {
    const { pathname } = useLocation()
    const { address } = useApplicationState()
    const onNavigate = useNavigate()
    const onDisconenct = useDisconnected()

    const handleInnerNavigate = (url: string) => {
        onNavigate(url)
        onClose()
    }
    const handleOutNavigate = (url: string) => {
        window.open(url, "_blank")
    }

    const handleDisconnect = () => {
        window.localStorage.clear()
        Toast.success("Disconnected Success")
        onDisconenct()
    }
    const onShowWalletModal = useToggleWalletModal()
    const handleConnectWallet = async () => {
        onShowWalletModal(true)
    }
    const Content = <>
        <Mask className={show ? "active" : ""} onClick={onClose}></Mask>
        <Wrapper show={show} className={show ? "active" : ""}>
            <Menu>
                <Item
                    className={pathname == "/mint" ? "select" : ""}
                    onClick={() => handleInnerNavigate("/mint")}
                >
                    <MenuText>mint</MenuText>
                    <ArrowIcon src={pathname == "/mint" ? NAV_SELECTED : NAV_NORMAL} />
                </Item>
                <Item onClick={() => handleOutNavigate(START_BUILD_LINK)}>
                    <MenuText>DOC</MenuText>
                    <Icon src={ICON_DOC} />
                </Item>
            </Menu>
            <Bottom>
                <Button>
                    {
                        address ? <LinearButton onClick={handleDisconnect}>Disconnect</LinearButton> :
                            <LinearButton onClick={handleConnectWallet}>Connect Wallet</LinearButton>
                    }
                </Button>
            </Bottom>
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
    width: 100%;
    background-color: #0c121a;
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter:blur(10px);
    height: calc(100vh - 72px);
    right:-100%;
    top:72px;
    bottom:0;
    z-index: 999;
    transition: all 0.3s linear;
    &.active{
       right: 0;
    }
`

const Menu = styled.ul`
    width: 100%;
    list-style: none;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    margin-top: 40px;
    padding:0 15px;
`
const MenuText = styled.span`
    font-size: 24px;
    color: #86888c;
    text-transform: uppercase;
`
const Item = styled.li`
    cursor: pointer;
    width:100%;
    height: 56px;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    align-items: center;
    gap:15px;
    user-select: none;
    &.select ${MenuText}{
        color: #f9ee0f;
    }

`
const ArrowIcon = styled.img`
    width: 16px;
    height: 16px;
`
const Icon = styled.img`
    width:14px;
    height: 14px;
`

const Bottom = styled.div`
    position: absolute;
    bottom:40px;
    left:16px;
    right:16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const Button = styled.div`
    width:100%;
    height: 44px;
`