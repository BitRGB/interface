import React from "react";
import styled from "styled-components";
import { ITabProps } from "./types";

export const ButtonGroupTab = ({ list, current, onChange }: ITabProps) => {
    return (
        <Wrapper>
            {
                list.map(item => {
                    return (
                        <React.Fragment key={item.id}>
                            {
                                item.id == current.id ? <LinearTab onClick={()=>onChange(item)}>
                                    <Inner>{item.name}</Inner>
                                </LinearTab> : <Normal onClick={()=>onChange(item)}>{item.name}</Normal>
                            }
                        </React.Fragment>
                    )
                })
            }
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    gap:15px;
`
const LinearTab = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    cursor: pointer;
    outline: none;
    border: none;
    background:linear-gradient(251deg, #105dff, #fbf459);
    width:130px;
    height:44px;
    box-sizing: border-box;
    padding:1px;
    cursor: pointer;
`
const Inner = styled.div`
    background-color: #1b2531;
    border-radius: 8px;
    width:100%;
    height:100%;
    font-size: 14px;
    color:#feffff;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Normal = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    cursor: pointer;
    outline: none;
    width: 130px;
    height: 44px;
    border: solid 1px rgba(255, 255, 255, 0.1);
    background-color: transparent;
    font-size: 14px;
    color:#feffff;
`