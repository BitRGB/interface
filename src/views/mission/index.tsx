import { styled } from "styled-components"
import { useEffect } from "react"
import Header from '../../components/header'
import Footer from '../home/footer'
import First from './first'
import GoTop from "../components/goTop"
import "animate.css"

const WOW = require("wowjs")


export default () => {
    useEffect(() => {
        if (WOW) {
            new WOW.WOW({
                boxClass: 'wow',
                animateClass: 'animate__animated',
                scrollContainer: "body" 
            }).init()
        }
    }, [])

    return (
        <Main>
            <GoTop />
            <Header></Header>
            <First />
            <Footer />
        </Main>
    )
}

const Main = styled.main`
    background-color: #0d121a;
`