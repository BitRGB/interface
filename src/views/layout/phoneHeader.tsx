import styled from "styled-components";
import { useEffect, useState } from "react";
import { ICON_PHONE_MENU, RGB_LOGO } from "assets";
import PhoneMenu from "./phoneMenu";

export default () => {
    const [isMask, setIsMask] = useState(false)
    const [isShowMenu, setIsShowMenu] = useState(false)
    useEffect(() => {
        document.body.addEventListener("scroll", handle)
        return () => {
            document.body.removeEventListener("scroll", handle)
        }
    }, [])
    const handle = (ev: Event) => {
        const scrollTop = document.body.scrollTop
        if (scrollTop > 80) {
            setIsMask(true)
        } else {
            setIsMask(false)
        }
    }
    const handleOpenMenu = () => {
        setIsShowMenu(true)
    }
    const handleCloseMenu = () => {
        setIsShowMenu(false)
    }
    return (
        <>
            <Header className={isMask ? "mask" : ""}>
                <Logo src={RGB_LOGO} onClick={() => window.open("/", "_self")} />
                <Center>
                    <Menu src={ICON_PHONE_MENU} onClick={handleOpenMenu} />
                </Center>
            </Header>

            <PhoneMenu onClose={handleCloseMenu} show={isShowMenu} />

        </>
    )
}


const Header = styled.header`
    top:0;
    height: 72px;
    width:100%;
    box-sizing: border-box;
    padding:0 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 20;
    &.mask{
        background: linear-gradient(270deg, rgba(21,21,27,0.6) 0%, rgba(0,0,0,0) 100%);
        border-bottom: 1px solid rgba(255,255,255,0.2);
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter:blur(10px);
    }
`

const Logo = styled.img`
    height: 32px;
    display: inline-block;
`
const Menu = styled.img`
    cursor: pointer;
    width:32px;
    height: 32px;
`
const Center = styled.div`
    display: flex;
    align-items: center;
    gap:15px;
`