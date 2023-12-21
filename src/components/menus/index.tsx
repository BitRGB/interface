import styled from "styled-components";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { NAV_NORMAL, NAV_SELECTED } from "../../assets";

const MENU_LIST = [
    {
        id: 1,
        name: "Mint",
        href: "/mint"
    }
]


export const Menu = () => {
    const [hoverd, setHoverd] = useState({ id: 0, hoverd: false })
    const { pathname } = useLocation()
    const onNavigate = useNavigate()

    const handleNavigate = (url: string) => {
        onNavigate(url)
    }
    const handleHovered = (item: any) => {
        setHoverd({ id: item.id, hoverd: true })
    }
    const handleMouseOut = (item: any) => {
        setHoverd({ id: item.id, hoverd: false })
    }
    return (
        <Nav>
            {
                MENU_LIST.map((item, index) => {
                    return (
                        <Item
                            key={`${item.id}_${index}`}
                            onClick={() => handleNavigate(item.href)}
                            onMouseMove={() => handleHovered(item)}
                            onMouseOut={() => handleMouseOut(item)}
                        >
                            <Text className={(pathname.startsWith(item.href) || (hoverd.id == item.id && hoverd.hoverd)) ? "selected" : ""}>{item.name}</Text>
                            <Icon src={(pathname.startsWith(item.href) || (hoverd.id == item.id && hoverd.hoverd)) ? NAV_SELECTED : NAV_NORMAL} />
                        </Item>
                    )
                })
            }
        </Nav>
    )
}

const Nav = styled.nav`
    display: flex;
    align-items: center;
    gap:37px;
    list-style: none;
    flex:1;
    display: flex;
    justify-content: center;
`
const Item = styled.li`
    display: flex;
    align-items: center;
    gap:5px;
    cursor: pointer;
`
const Text = styled.span`
    font-size: 16px;
    color: #86888c;
    text-transform: uppercase;
    &.hover,&.selected{
        color: #f8ed0e;
    }
`
const Icon = styled.img`
    width:10px;
    height:10px;
`