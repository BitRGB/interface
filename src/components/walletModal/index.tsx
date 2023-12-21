import styled from "styled-components";
import { ICON_ALBY, ICON_OKX, ICON_TP, MODAL_CLOSE } from "assets";
import { createPortal } from "react-dom";
import { useApplicationState, useConnectWallet, useToggleInstallWalletModal, useToggleWalletModal } from "store/application";


export const WalletModal = () => {
    const { walletName } = useApplicationState()
    const onConnectWallet = useConnectWallet()
    const onCloseWallet = useToggleWalletModal()
    const onOpenInstallWallet = useToggleInstallWalletModal()

    const handleCloseWallet = () => {
        onCloseWallet(false)
    }
    const handleConnectWallet = async (name: string) => {
        if (name == "okx") {
            if ((window as any).okxwallet == undefined) {
                onOpenInstallWallet(true, name)
                return
            }
        } else if (name == "tokenpocket") {
            if ((window as any).tokenpocket == undefined) {
                onOpenInstallWallet(true, name)
                return
            }
        }else{
            if((window as any).alby==undefined){
                onOpenInstallWallet(true,name)
                return
            }
        }
        await onConnectWallet(name)
    }

    return createPortal(<>
        <Mask></Mask>
        <Modal>
            <CloseImg src={MODAL_CLOSE} onClick={handleCloseWallet} />
            <Title>Connect Wallet</Title>
            <List>
                <Item onClick={() => handleConnectWallet("okx")} className={walletName == "okx" ? "selected" : ""}>
                    <Inner>
                        <Icon src={ICON_OKX} />
                        <Name>OKX</Name>
                    </Inner>
                </Item>
                <Item onClick={() => handleConnectWallet("alby")} className={walletName == "alby" ? "selected" : ""}>
                    <Inner>
                        <Icon src={ICON_ALBY} />
                        <Name>Alby</Name>
                    </Inner>
                </Item>
                <Item onClick={() => handleConnectWallet("tokenpocket")} className={walletName == "tokenpocket" ? "selected" : ""}>
                    <Inner>
                        <Icon src={ICON_TP} />
                        <Name>TokenPocket</Name>
                    </Inner>
                </Item>
            </List>
        </Modal>
    </>, document.body)
}

const Mask = styled.div`
    position: fixed;
    -webkit-filter: blur(10px);
    filter: blur(10px);
    top:0;
    right:0;
    left:0;
    bottom: 0%;
    z-index:998;
    background-color: rgba(0,0,0,0.5);
`

const Modal = styled.div`
    position: fixed;
    left:50%;
    top:50%;
    transform: translate(-50%,-50%);
    width: 400px;
    border-radius: 10px;
    background-color: #141c25;
    z-index: 999;
    @media screen and (max-width:960px){
        width:calc(100vw - 30px);
    }
`
const CloseImg = styled.img`
    width:16px;
    height: 16px;
    cursor: pointer;
    position: absolute;
    top:25px;
    right:25px;
`
const Title = styled.div`
    font-size: 20px;
    color: #fff;
    margin-top: 28px;
    text-align: center;
`
const List = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    margin-top: 32px;
    gap:15px;
    padding:0 25px 30px;
`

const Item = styled.li`
    border-radius: 5px;
    background-color: rgba(255,255,255,0.1);
    padding:1px;
    box-sizing: border-box;
    height: 60px;
    cursor: pointer;
    &:hover,&.selected{
        background: linear-gradient(260deg, #115dfd, #d1e119);
    }
`

const Inner = styled.div`
    background-color: #1b2531;
    height: 100%;
    border-radius: 5px;
    box-sizing: border-box;
    padding:0 15px;
    display: flex;
    align-items: center;
    gap:15px;
`
const Icon = styled.img`
    width:30px;
    height:30px;
`
const Name = styled.span`
    font-size: 16px;
    line-height: 0.88;
    color:#fff;
`