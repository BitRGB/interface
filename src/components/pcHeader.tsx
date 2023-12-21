import { useEffect, useState, MouseEvent } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import styled from "styled-components"
import { ICON_ARROW_DOWN, ICON_DOC, ICON_HEADER_BUTTON, LOGO, RGB_LOGO } from '../assets'
import { START_BUILD_LINK } from "../config"
import Menu from './menu'

const INMENU_LIST = [{
    id: 1,
    name: "zk-HyperScale Solution",
    url: "innovation"
},
{
    id: 2,
    name: "Peg-in Mechanism",
    url: "Mechanism"
},
{
    id: 3,
    name: "Security Mechanism",
    url: "innovation1"
}
]
const DISCOVER_LIST = [{
    id: 1,
    name: "satBTC",
    url: "satBTC"
},
{
    id: 2,
    name: "RaaS",
    url: "RaaS"
},
    /* {
        id:3,
        name:"RaaS",
        url:"RaaS"
    } */
]
const BUILD_LIST = [{
    id: 1,
    name: "Ecosystem",
    url: "Ecosystem"
},
{
    id: 2,
    name: "For Developers",
    url: "Developers"
}
]
export default () => {
    const [isMask, setIsMask] = useState(false)
    const { pathname, hash } = useLocation()
    const onNavigate = useNavigate()
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
    const scrollToAnchor = (achorName: string) => {
        console.log(pathname)
        if (pathname == "/") {
            onNavigate("/#" + achorName)
            if (achorName) {
                let element = document.getElementById(achorName)
                if (element) {
                    element!.scrollIntoView({ block: "start", behavior: "smooth" })
                }
            }
        } else {
            window.open("/#home", "_self")
        }
    }
    useEffect(() => {
        if (pathname == "/" && hash != "") {
            scrollToAnchor(hash.slice(1))
        }
    }, [pathname])

    const handleStartBuild = () => {
        window.open(START_BUILD_LINK, "_blank")
    }

    return (
        <Header className={isMask ? "mask" : ""}>
            <Logo src={RGB_LOGO} onClick={() => scrollToAnchor("home")} />
            <Nav>
                <Li id="menuin">
                    <LinkOpen onClick={() => scrollToAnchor("home")}>About</LinkOpen>
                </Li>
                <Li>
                    <LinkOpen onClick={() => scrollToAnchor("innovation")}>Innovations</LinkOpen>
                </Li>
                <Li>
                    <LinkOpen onClick={() => scrollToAnchor("market")}>Marketplace</LinkOpen>
                </Li>
                <Li>
                    <LinkOpen onClick={() => scrollToAnchor("assets")}>Assets</LinkOpen>
                </Li>
                <Li>
                    <LinkOpen onClick={() => scrollToAnchor("advantages")}>Competitive Advantages</LinkOpen>
                </Li>
                <Li>
                    <LinkOpen onClick={() => scrollToAnchor("ecosystem")}>Ecosystem</LinkOpen>
                </Li>
                <Li>
                    <Linke target="_blank" to="https://bitrgb.gitbook.io/bitrgb-doc/project-overview/bitrgb">DOC</Linke>
                    <Icon src={ICON_DOC} />
                </Li>
            </Nav>
            <Button onClick={handleStartBuild}>START BUILDING</Button>
        </Header>
    )
}

const Header = styled.header`
    position: fixed;
    box-sizing: border-box;
    display: flex;
    padding:20px 40px;
    width:100%;
    height: 84px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 50;
    &.mask{
        background:rgba(13, 18, 26, 0.3); 
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter:blur(10px);
    }
`
const Logo = styled.img`
   height:40px ;
   cursor: pointer;
   user-select: none;
`
const Nav = styled.nav`
    display: flex;
    list-style: none;
    align-items: center;
`
const Li = styled.li`
    margin-right: 40px;
    display: flex;
    align-items: center;
    &:nth-last-child(1){
        margin-right: 0;
    }
`
const Linke = styled(Link)`
    font-size: 12px;
    font-weight: 600;
    line-height: 1.67;
    color: rgba(255,255,255,0.5);
    cursor: pointer;
    user-select: none;
    text-decoration: none;
    text-transform: uppercase;
    &:hover{
        text-decoration: underline;
        color:#fff;
    }
`
const LinkOpen = styled.a`
    font-size: 12px;
    font-weight: 600;
    line-height: 1.67;
    color: rgba(255,255,255,0.5);
    cursor: pointer;
    user-select: none;
    text-decoration: none;
    text-transform: uppercase;
    &:hover{
        text-decoration: underline;
        color:#fff;
    }
`
const Icon = styled.img`
    width: 10px;
    height: 10px;
    margin-left: 8px;
`
const Button = styled.div`
    background-image: url(${ICON_HEADER_BUTTON});
    background-size: cover;
    width:162px;
    height: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    user-select: none;
    font-size: 12px;
    font-weight: bold;
    line-height: 1.33;
    color: #fff;
`
