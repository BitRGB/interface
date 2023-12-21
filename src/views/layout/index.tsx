import styled from "styled-components";
import { Outlet } from 'react-router-dom'
import { Footer, Header, WalletModal } from "components";
import { Suspense } from "react";
import { IMAGE_BG } from "assets";
import { useIsPhone } from "hooks";
import { useApplicationState } from "store/application";
import { WalletTipModal } from "components/walletTipModal";
import PhoneHeader from './phoneHeader'

export default () => {
    const isPhone = useIsPhone()
    const { showWalletModal, installWallet } = useApplicationState()
    return (
        <>
            <Bg src={IMAGE_BG} />
            <Wrapper>
                {isPhone ? <PhoneHeader /> : <Header />}
                <Body>
                    <Suspense fallback={<></>}>
                        <Outlet />
                    </Suspense>
                    <Footer />
                </Body>
            </Wrapper>
            {showWalletModal && <WalletModal />}
            {installWallet.isInstall && <WalletTipModal name={installWallet.name} />}
        </>
    )
}
const Bg = styled.img`
    position: fixed;
    right:0;
    top:0;
    bottom: 0;
    z-index: 1;
`
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width:100%;
    height:100vh;
    position: relative;
    overflow: hidden;
    z-index: 2;
`
const Body = styled.main`
    flex:1;
    overflow-y: auto;
    box-sizing: border-box;
    padding:0 40px 40px;
    @media screen and (max-width:960px){
        padding:0 15px 40px;
    }
`