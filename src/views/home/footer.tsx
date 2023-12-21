import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { ICON_DISCORD, ICON_DOC_BOTTOM, ICON_GIT, ICON_MED, ICON_TG, ICON_TW, LOGO, RGB_HOME, RGB_LOGO } from "../../assets";
import { DOC_LINK, GIT_HUB, MEDIUM_LINK, TG_LINK, TWRITTER_LINK } from "../../config";
import { MiddleLeftLine, MiddleRightLine } from "./line";

export default () => {
    const { pathname } = useLocation()
    const onNavigate = useNavigate()
    const scrollToAnchor = (achorName: string) => {
        if (pathname == "/") {
            onNavigate("/#" + achorName)
            if (achorName) {
                let element = document.getElementById(achorName)
                if (element) {
                    element.scrollIntoView({ block: "start", behavior: "smooth" })
                }
            }
        } else {
            window.open("/#home", "_self")
        }
    }
    const handleLink = (url: string) => {
        window.open(url, "_blank")
    }
    return (
        <Footer>
            <MiddleLeftLine isTop={false}></MiddleLeftLine>
            <Main>
                <Menu >
                    <Logo src={RGB_LOGO} onClick={() => scrollToAnchor("home")} />
                    <IconList>
                        <Image src={RGB_HOME} onClick={() => handleLink("https://rgb.tech/")} />
                        <IconItem onClick={() => handleLink(TWRITTER_LINK)}>
                            <Icon src={ICON_TW} />
                        </IconItem>
                        <Image src={ICON_DISCORD} onClick={() => handleLink(MEDIUM_LINK)} />
                        <IconItem>
                            <Icon src={ICON_DOC_BOTTOM} onClick={() => handleLink(DOC_LINK)} />
                        </IconItem>
                        <IconItem>
                            <Icon src={ICON_GIT} onClick={() => handleLink(GIT_HUB)} />
                        </IconItem>
                    </IconList>
                </Menu>
            </Main>
            <MiddleRightLine isTop={false}></MiddleRightLine>
        </Footer>
    )
}

const Footer = styled.footer`
    position: relative;
    height: 100px;
    box-sizing: border-box;
    padding:0 40px;
    @media screen and (max-width:960px){
        height: auto;
        padding:0;
    }
`
const Main = styled.div`
     border-top: 2px solid rgba(255,255,255,0.1);
     overflow: hidden;
`

const Menu = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100px;
    box-sizing: border-box;
    padding:0 40px;
    @media screen and (max-width:960px){
        padding:0 16px;
    }
`
const Logo = styled.img`
   
   height:32px ;
    display: block;
    cursor: pointer;
`

const IconList = styled.ul`
    list-style: none;
    display: flex;
    align-items: center;
    gap:15px;
    @media screen and (max-width:960px){
        justify-content: space-between;
        
    }
`
const Image = styled.img`
    width:40px;
    height:40px;
    cursor: pointer;
`
const IconItem = styled.li`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #1c2534;
    cursor: pointer;
    &:nth-last-child(1){
          margin-right: 0;
      }
      @media screen and (max-width:960px){
        margin: 0;
      }
`
const Icon = styled.img`
    width: 24px;
    height:24px;
    object-fit: contain;
`