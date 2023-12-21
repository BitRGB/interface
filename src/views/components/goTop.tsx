import { useEffect, useState } from "react";
import styled from "styled-components";
import { GO_TOP } from "../../assets";

export default () => {
    const [show, setShow] = useState(false)

    useEffect(() => {
        const handle = () => {
            if (document.body.scrollTop > 84) {
                setShow(true)
            } else {
                setShow(false)
            }
        }
        document.body.addEventListener("scroll", handle)
        return () => {
            document.body.removeEventListener("scroll", handle)
        }
    }, [])

    const handleGoTop = () => {
        document.body.scrollTo(0, 0)
    }

    return (
        <GoTop src={GO_TOP} show={show} onClick={handleGoTop}></GoTop>
    )
}

const GoTop = styled.img<{ show: boolean }>`
    display: none;
    @media screen and (max-width:960px){
        display: ${({ show }) => show ? "flex" : "none"};
        width: 40px;
        height: 40px;
        position: fixed;
        right:16px;
        bottom: 180px;
        z-index: 600;
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter:blur(10px);
    }
`