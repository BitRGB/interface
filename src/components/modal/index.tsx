import { MODAL_CLOSE } from "assets";
import { ReactNode } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";

interface IModalProps {
    header?: ReactNode
    children?: ReactNode
    onClose?: () => void
}

export default ({ header, children, onClose }: IModalProps) => {
    return (
        createPortal(
            <>
                <Mask onClick={onClose}></Mask>
                <Content>
                    <Header>
                        {header}
                        <ModalClose src={MODAL_CLOSE} onClick={onClose}></ModalClose>
                    </Header>
                    {
                        children
                    }
                </Content>
            </>
            , document.body)
    )
}

const Mask = styled.div`
    position: fixed;
    top:0;
    bottom: 0;
    right:0;
    left: 0;
    z-index: 998;
    -webkit-filter: blur(10px);
    filter: blur(10px);
    background-color: rgba(0,0,0,0.8);
`
const Content = styled.div`
    position: fixed;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
    border-radius: 8px;
    background-color: #141c25;
    z-index: 999;
    width:550px;
    @media screen and (max-width:960px){
        width: calc(100vw - 40px);
    }
`
const Header = styled.div`
    height: 70.5px;
    box-sizing: border-box;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid rgba(255,2555,255,0.1);
`
const ModalClose = styled.img`
    cursor: pointer;
    width:16px;
    height: 16px;
    position:absolute;
    top:28px;
    right:20px;
`