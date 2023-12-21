import { styled } from "styled-components"
import { useEffect, useLayoutEffect } from "react"
import { useMediaQuery } from "usehooks-ts"
import Header from '../../components/header'
import First from './first'
import Footer from './footer'
import Develop from "./develop"
import Advantages from "./Advantages"
import DualNode from './dualNode'
import Discover from './discover'
import Discover2 from './discover2'
import Build from './build'
import "animate.css"

const WOW = require("wowjs")

export default () => {
    const matches = useMediaQuery('(max-width: 960px)')
    useEffect(() => {
        if (WOW) {
            new WOW.WOW({
                boxClass: 'wow',
                animateClass: 'animate__animated',
                scrollContainer: "body"
            }).init()
        }
    }, [])

    useLayoutEffect(() => {
        const ad_ul = document.getElementById("advantages_ul")
        const advan = document.getElementById("innovation")

        const handle = () => {
            if (ad_ul) {
                if (document.body.scrollTop > advan!.offsetTop) {
                    const left = document.body.scrollTop - advan!.offsetTop
                    const winHeight = document.documentElement.clientHeight
                    const translate = parseInt(ad_ul.getAttribute("data-translate") || "0")
                    if (translate <= -974 && left > winHeight) {
                        ad_ul!.style.transform = "translateX(-974px)"
                        ad_ul!.setAttribute("data-translate", `-${974}`)
                    } else {
                        ad_ul!.style.transform = "translateX(-" + left + "px)"
                        ad_ul!.setAttribute("data-translate", `-${left}`)
                    }
                } else {
                    ad_ul!.style.transform = "translateX(0px)"
                    ad_ul!.setAttribute("data-translate", `0`)
                }
            }
        }
        if (!matches) {
            document.body.addEventListener("scroll", handle)
        }

        return () => {
            if (!matches) {
                document.body.removeEventListener("scroll", handle)
            }
        }

    }, [])
    return (
        <Main>
            <Header></Header>
            <First />
            <Advantages />
            <DualNode/>
            <Discover/>
            <Discover2/>
            <Build/>
            <Develop />
            <Footer />
        </Main>
    )
}

const Main = styled.main`
    background-color: #0d121a;
`