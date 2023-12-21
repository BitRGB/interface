import styled from "styled-components";
import { Toast } from "components/toast";
import { useCopy } from "hooks";
import { useRef, useState } from "react";
import { useApplicationState, useDisconnected, useToggleWalletModal } from "store/application";
import { useOnClickOutside } from 'usehooks-ts'
import { shortenAddress } from "utils";
import { ARROW_SEL_DOWN } from "../../assets";

export const ConnectButton = () => {
    const onShowWalletModal = useToggleWalletModal()
    const handleConnectWallet = async () => {
        onShowWalletModal(true)
    }
    return (
        <Wrapper >
            <Current onClick={handleConnectWallet}>
                <Text>Connect Wallet</Text>
            </Current>
        </Wrapper>
    )
}

export const ConnectedButton = () => {
    const [open, setOpen] = useState(false)
    const { address } = useApplicationState()
    const SelecteRef = useRef<HTMLDivElement>(null)
    const onCopy = useCopy()
    const onDisconenct = useDisconnected()
    useOnClickOutside(SelecteRef, () => setOpen(false))
    const handleToggleOptionMenu = () => {
        setOpen(!open)
    }
    const handleCopy = () => {
        onCopy(address)
        setOpen(false)
    }
    const handleDisconnect = () => {
        window.localStorage.clear()
        Toast.success("Disconnected Success")
        setOpen(false)
        onDisconenct()
    }
    return (
        <Wrapper ref={SelecteRef}>
            <Current onClick={handleToggleOptionMenu}>
                <Text>{shortenAddress(address)}</Text>
                <Icon className={open ? "up" : ""} src={ARROW_SEL_DOWN} />
            </Current>

            {
                open && <OptionMenu>
                    <Item onClick={handleCopy}>
                        Copy Address
                    </Item>
                    <Item onClick={handleDisconnect}>
                        Disconnected
                    </Item>
                </OptionMenu>
            }
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width:100%;
    height:100%;
    position: relative;
    cursor: pointer;
`
const Current = styled.div`
    border-radius: 5px;
    border: solid 1px rgba(255, 255, 255, 0.1);
    width:100%;
    height:100%;
    box-sizing: border-box;
    padding:0 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    user-select: none;
`
const Text = styled.span`
    font-size: 14px;
    color: #fefefe;
    text-transform: capitalize;
`
const Icon = styled.img`
    width:16px;
    height:16px;
    transition: all 0.3s linear;
    &.up{
        transform: rotate(180deg);
    }
`
const OptionMenu = styled.div`
    position: absolute;
    top:55px;
    width:100%;
    z-index: 1000;
    left:0;
    border-radius: 5px;
    border: solid 1px rgba(255, 255, 255, 0.1);
    background-color: #141c25;
    box-sizing: border-box;
    padding: 20px 15px;
    display: flex;
    flex-direction: column;
    gap:20px;
`

const Item = styled.div`
    cursor: pointer;
    font-size: 14px;
    color: #fefefe;
`