import styled from "styled-components";
import { MODAL_CLOSE } from "assets";
import { SUPPORT_WALLETS } from "config";
import { useToggleInstallWalletModal } from "store/application";

export const WalletTipModal = ({ name }: { name: string }) => {
    const onCloseInstall = useToggleInstallWalletModal()
    const item = SUPPORT_WALLETS[name]
    const handleClose=()=>{
        onCloseInstall(false,"")
    }
    return (
        <Wrapper>
            <Container>
                <Text>
                    Install the {item.name} extension on your browser<br />
                    {item.name} manages your Nostr keys, and you can use your key to sign it
                </Text>
                <Install href={item.href} target="_blank">Install now</Install>
            </Container>
            <ModalClose src={MODAL_CLOSE} onClick={handleClose}/>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    position: fixed;
    width: 370px;
    padding: 15px 20px 20px 15px;
    border-radius: 5px;
    box-sizing: border-box;
    border: solid 1px rgba(255, 255, 255, 0.1);
    background-color: #141c25;
    top:74px;
    right:40px;
    z-index: 9997;
    display: flex;
    gap:17px;
    @media screen and (max-width:960px){
        right:15px;
        width:calc(100vw - 30px);
    }
`

const ModalClose = styled.img`
    width:14px;
    height:14px;
    cursor: pointer;
`
const Container = styled.div`

`
const Text = styled.div`
    font-size: 14px;
    line-height: 1.43;
    color: #fefefe;
`

const Install = styled.a`
    display: inline-block;
    margin-top: 10px;
    text-decoration: none;
    font-size: 14px;
    line-height: 1.43;
    letter-spacing: normal;
    color: #ece410;
    cursor: pointer;
`
