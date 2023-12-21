import styled, { keyframes } from "styled-components";
import { ICON_BALL, ICON_BG, ICON_BITON, ICON_CYCLE, ICON_ETH, ICON_SQURE } from "../../assets";


export default ()=>{
    return (
        <Wrapper>
            <Bg src={ICON_BG} />
            <Ball src={ICON_BALL}/>
            <Squre src={ICON_SQURE}/>
            <Cycle src={ICON_CYCLE}/>
            <Eth src={ICON_ETH}/>
            <BitCon src={ICON_BITON}/>
        </Wrapper>
    )
}
const a_ball = keyframes`
    0%,
    100% {
        transform: translate(0, 0);
    }
    50% {
        transform: translate(0px, -20px);
    }
`
const Wrapper = styled.div`
    position: absolute;
    width: 450px;
    height: 589px;
    top: 160px;
    right: 7%;
    @media screen and (max-width:960px){
        width: 231px;
        top:170px;
        height: 270px;
        right: -2%;
    }
`
const Bg = styled.img`
    width: 100%;
    height: 100%;
    border-style: none;
`
const Ball = styled.img`
    position: absolute;
    top: 47px;
    right: 124px;
    animation: ${a_ball} 1s ease 1s infinite normal both;
    @media screen and (max-width:960px){
        width:22px;
        height: 22px;
        right:56px;
        top:25px;
    }
`
const Squre = styled.img`
    position: absolute;
    top: 88px;
    right: 52px;
    animation: ${a_ball} 1s ease 1.2s infinite normal both;
    @media screen and (max-width:960px){
        width:33px;
        height: 33px;
        right:25px;
        top:65px;
    }
`
const Cycle = styled.img`
    position: absolute;
    top: 135px;
    right: 108px;
    animation: ${a_ball} 1s ease 1.5s infinite normal both;
    @media screen and (max-width:960px){
        width:52px;
        height: 40px;
        right:65px;
        top:80px;
    }
`
const Eth = styled.img`
    position: absolute;
    top: 229px;
    right: 205px;
    animation: ${a_ball} 1s ease 1.8s infinite normal both;
    @media screen and (max-width:960px){
       height: 48px;
        right:95px;
        top:130px;
    }
`
const BitCon = styled.img`
    position: absolute;
    top: 210px;
    right: 90px;
    animation: ${a_ball} 1s ease 1.7s infinite normal both;
    @media screen and (max-width:960px){
        width:36px;
        height: 36px;
        right:45px;
        top:110px; 
    }
`