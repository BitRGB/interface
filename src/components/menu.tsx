import { useRef } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { useOnClickOutside } from 'usehooks-ts'
interface IListItem {
    id: number
    name: string
    url: string
}
interface IMenu {
    list: IListItem[]
    offset: number
    onClose:()=>void
    onClick:(url:string)=>void
}
export default ({ list, offset,onClose,onClick }: IMenu) => {
    const ref = useRef(null)
    const handleClickOutside = () => {
        onClose()
    }
    const hanleClick=(url:string)=>{
        onClick(url)
        onClose()
    }
    useOnClickOutside(ref, handleClickOutside)

    return ReactDOM.createPortal((
        <Menu offset={offset} ref={ref}>
            {
                list.map(item => {
                    return (
                        <MenuItem  key={item.id.toString() + item.name} onClick={()=>hanleClick(item.url)}>
                            <MenuText>
                                {item.name}
                            </MenuText>
                        </MenuItem>
                    )
                })
            }
        </Menu>
    ), document.body)
}

const Menu = styled.div<{ offset: number }>`
    position: absolute;
    border-radius: 8px;
    left:${({ offset }) => offset}px;
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    border: solid 1px rgba(255, 255, 255, 0.4);
    background-color: rgba(0, 0, 0, 0.2);
    width:198px;
    z-index:500 ;
    top:60px;
`

const MenuItem = styled.a`
    box-sizing:border-box ;
    padding:16px;
    display:block ;
    border-bottom: 1px solid rgba(255,255,255,0.4);
    cursor: pointer;
    user-select:none;
    &:nth-last-child(1){
        border-bottom:0 ;
    }
`
const MenuText = styled.span`
    font-family: SourceCodeProRoman-Medium;
    font-size: 12px;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    font-variation-settings: normal;
    line-height: 1.67;
    color:rgba(255,255,255,0.6);
    &.selected{
      color: #fff;
    }
    &:hover{
      color:#fff;
    }
`