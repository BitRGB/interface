import styled from "styled-components";
import { ITabProps } from './types'

export const BottomTab = ({ list, onChange, current }: ITabProps) => {
    return (
        <Wrapper>
            {
                list.map(item => {
                    return (
                        <Item
                            key={`bottom_tab_${item.id}`}
                            className={item.id == current.id ? "active" : ""}
                            onClick={() => onChange(item)}
                        >{item.name}</Item>
                    )
                })
            }
        </Wrapper>
    )
}

const Wrapper = styled.ul`
    display: flex;
    border-bottom: 1px solid rgba(255,255,255,0.1);
    list-style: none;
    width:100%;
    height: 100%;
    display: flex;
    gap:40px;
`

const Item = styled.div`
    height: 100%;
    cursor: pointer;
    font-size: 16px;
    color: #85888c;
    &.active{
        border-bottom: 2px solid #f9ee0e;
        color:#f9ee0e;
    }
`