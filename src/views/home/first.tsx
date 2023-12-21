import styled, { keyframes } from "styled-components";
import { useNavigate } from "react-router-dom";
import { BG_FIRST, ICON_ARROW, UNDERLINE } from "../../assets";
import { LeftLine, RightLine } from './line'
import Animate from './Animate'


export default () => {
    const onNavigate = useNavigate()
    return (
        <Wrapper id="home">
            <LeftLine />
            <Container>
                <Left>
                    <Title className="wow animate__fadeIn">
                        BitRGB - Leading Bitcoin Asset Management Platform
                        <UnderLine src={UNDERLINE} data-wow-delay="0.1s" className="wow animate__fadeIn" />
                    </Title>
                    <SubTitle data-wow-delay="0.5s" className="wow animate__fadeIn">
                        Achieving Infinite Scalability for web3 Asset Issuance and Trading
                    </SubTitle>
                    <SubTitle2 data-wow-delay="0.5s" className="wow animate__fadeIn">
                        BitRGB is a Bitcoin asset management platform based on RGB, supporting the issuance and trading of Bitcoin assets such as NFTs and tokens.
                    </SubTitle2>
                    <Button data-wow-delay="1s" className="wow animate__fadeIn" onClick={() => onNavigate("/vision")}>
                        <Span>Vision Of BitRGB</Span>
                        <Arrow src={ICON_ARROW} />
                    </Button>
                </Left>
                <Right data-wow-delay="0.5s" className="wow animate__fadeIn">
                    <Animate />
                </Right>
            </Container>
            <RightLine />
        </Wrapper>
    )
}

const Span = styled.span`
    flex:1;
    text-align:center ;
`
const Wrapper = styled.div`
    width: 100%;
    height: 780px;
    box-sizing: border-box;
    padding-top:84px;
    position: relative;
    background:  url(${BG_FIRST}) no-repeat center center fixed, var(--grad), linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 50%, rgba(255, 255, 255, 0.1) 50%) no-repeat 30px 0px;
    background-size:  100% 100%, 100% 100%, 1px 100%;
`
const animate = keyframes`
    0% {
        clip: rect(0px, 0px, 20px, 0px);
    }

    100% {
        clip: rect(0px, 346px, 20px, 0px);
    }
`
const animatePhone = keyframes`
    0% {
         clip: rect(0px, 0px, 10px, 0px);
    }

    100% {
        clip: rect(0px, 192px, 10px, 0px);
    }
`
const UnderLine = styled.img`
    position: absolute;
    left:0px;
    top:50px;
    animation: ${animate} 0.6s linear 0.5s forwards ;
    width: 275px;
    height: 20px;
    @media screen and (max-width:960px){
        width: 192px;
        height: 10px;
        left:0;
        animation: ${animatePhone} 0.6s linear 0.5s forwards ;
    }
`
const Container = styled.div`
    width: 1280px;
    margin:0 auto;
    display: flex;
    @media screen and (max-width:960px){
        width:100%;
        box-sizing: border-box;
        padding:0 16px;
    }
`
const Left = styled.div`
    margin-top: 96px;
    @media screen and (max-width:960px){
        margin-top: 31px;
        position: relative;
        z-index: 6;
    }

`
const Title = styled.h1`
    width: 950px;
    height: 120px;
    font-family: DrukWideMedium-Wide;
    font-size: 46px;
    font-weight: 500;
    color: #fff;
    position: relative;
    @media screen and (max-width:960px){
        font-size: 36px;
        font-weight: normal;
        line-height: 47px;
        width: 80%;
        height: auto;
    }
`
const SubTitle = styled.h2`
    margin-top: 26px;
    width: 906px;
    font-size: 16px;
    font-weight: 600;
    color: #fff;
    line-height: 20px;
    @media screen and (max-width:960px){
        margin-top: 40px;
        width: 100%;
        font-size: 14px;
        line-height: 1.25;
    }
`
const SubTitle2 = styled(SubTitle)`
    margin-top: 8px;
    @media screen and (max-width:960px){
        margin-top: 16px;
    }
`
const Button = styled.div`
    box-sizing: border-box;
    width: 430px;
    height: 44px;
    background-color: #105DFF;
    color: white;
    font-family: SourceCodeProRoman-Regular, SourceCodeProRoman;
    display: flex;
    font-size: 12px;
    font-weight: 600;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    box-sizing: border-box;
    user-select: none;
    padding: 0px 15px;
    margin-top: 60px;
    border-radius: 10px;
    position: relative;
    background: linear-gradient(-150deg, transparent 12px, #105DFF 0);
    @media screen and (max-width:960px){
        margin-top: 40px;
        width: 279px;
        height: 48px;
        line-height: 16px;
    }
`
const Arrow = styled.img`
    width:20px;
    height: 20px;
`
const Right = styled.div`
    margin-top: -120px;
    width:450px;
    margin-left: -13px;
    position: relative;
    @media screen and (max-width:960px){
        width:231px;
    }
`