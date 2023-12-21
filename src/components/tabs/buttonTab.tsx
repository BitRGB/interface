import { useMemo } from "react";
import styled from "styled-components";
import { ITabProps } from './types'

export const ButtonTab = ({ list, current, onChange }: ITabProps) => {
    const index = useMemo(() => {
        return list.findIndex(item => item.id == current.id)
    }, [list, current])

    return (
        <Wrapper length={list.length} background={current.attrs.background} index={index}>
            {
                list.map(item => {
                    return (
                        <Item key={`button_tab_${item.id}`} onClick={() => onChange(item)}>
                            {item.name}
                        </Item>
                    )
                })
            }
        </Wrapper>
    )
}

const Wrapper = styled.ul<{ length: number, index: number, background: string }>`
    display: flex;
    list-style: none;
    width:100%;
    height:100%;
    border-radius: 5px;
    background-color: #000;
    position: relative;
    &::before{
        content: "";
        position: absolute;
        width:${({ length }) => `calc(100% / ${length})`};
        top:0;
        left:${({ index, length }) => `calc(100% * ${index} / ${length})`};
        height:100%;
        background-color:${({ background }) => background};
        border-radius: 5px;
        transition:all 0.3s linear;
    }
`

const Item = styled.li`
    flex:1;
    display: flex;
    cursor: pointer;
    user-select: none;
    font-size: 14px;
    color:#fff;
    position: relative;
    align-items: center;
    justify-content: center;
    z-index: 2;
`
