import styled, { keyframes } from "styled-components";
import { BG_FIRST,SHIMING_BG, SHIMING_BALL, SHIMING_BTC, SHIMING_CYCLE, SHIMING_CYCLE2, SHIMING_ETH, SHIMING_SQURE, SHIMING_SATPORT } from "../../assets";
import { LeftLine, RightLine } from '../home/line'


export default () => {
    return (
        <Wrapper id="home">
            <LeftLine />
            <Container>
                <Left>
                    <Title className="wow animate__fadeInLeft">
                        Vision of BitRGB
                    </Title>
                    <Content>
                        <SubTitle1 data-wow-delay="0.3s" className="wow animate__fadeInLeft">
                            BitRGB shapes the digital art and asset economy on the Bitcoin blockchain with a more decentralized and trustless empowerment principle.
                        </SubTitle1>
                        <SubTitle1 data-wow-delay="0.5s" className="wow animate__fadeInLeft">
                            Building upon the RGB protocol, BitRGB facilitates the issuance and trading of Bitcoin assets, along with a more diversified range of smart contract scenarios, achieving heightened scalability, privacy, and programmability. The vision of BitRGB aligns closely with RGB, aiming to empower the Bitcoin ecosystem and restore greatness to Bitcoin.
                        </SubTitle1>
                    </Content>
                </Left>
                <Image>
                    <Bg src={SHIMING_BG} />
                    <Ball src={SHIMING_BALL} />
                    <Btc src={SHIMING_BTC} />
                    <Cycle src={SHIMING_CYCLE} />
                    <Cycle2 src={SHIMING_CYCLE2} />
                    <Eth src={SHIMING_ETH} />
                    <Squre src={SHIMING_SQURE} />
                    <Sat src={SHIMING_SATPORT} />
                </Image>
            </Container>
            <RightLine />
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width: 100%;
    height: 973px;
    box-sizing: border-box;
    padding-top:84px;
    position: relative;
    background:  url(${BG_FIRST}) no-repeat center center fixed, var(--grad), linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 50%, rgba(255, 255, 255, 0.1) 50%) no-repeat 30px 0px;
    background-size:  100% 100%, 100% 100%, 1px 100%;
    @media screen and (max-width:960px){
        padding-bottom: 50px;
        padding-top:40px;
        height: auto;
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
        flex-direction: column;
    }
`
const Left = styled.div`
    margin-top: 76px;
    position: relative;
    z-index: 3;
    flex:1;
    @media screen and (max-width:960px){
        margin-top: 34px;
        width: 100%;
        display:initial ;
    }
`
const Title = styled.h1`
    width: 1011px;
    font-family: DrukWideMedium-Wide;
    font-size: 60px;
    font-weight: 500;
    color: #fff;
    position: relative;
    line-height: 1.25;
    @media screen and (max-width:960px){
        width:100%;
        font-size: 26px;
        width: 80%;
    }
`
const Content = styled.div`
    margin-top: 40px;
`
const SubTitle1 = styled.h3`
    margin-top: 16px;
    width: 898px;
    font-size: 16px;
    font-weight: 600;
    color: rgba(255,255,255,0.6);
    line-height: 20px;
    @media screen and (max-width:960px){
        width: 100%;
        font-size: 14px;
    }
`
const Image = styled.div`
    width: 382px;
    height: 522px;
    object-fit: contain;
    margin-top: 105px;
    margin-left: -117px;
    position: relative;
    @media screen and (max-width:960px){
        width: 179px;
        height: 245px;
        margin-top: 50px;
        right:0;
        position: absolute;
    }
`
const a_ball = keyframes`
     0%,
    100% {
        transform: translate(0, 0);
    }

    50% {
        transform: translate(0px, -20px);
    }
`
const Bg = styled.img`
    width:100%;
    height: 100%;
`
const Ball = styled.img`
      position: absolute;
      top: 138px;
      right: 118px;
      animation: ${a_ball} 1s ease 1s infinite normal both;
      @media screen and (max-width:960px){
        width: 25px;
        height: 25px;
        top: 62px;
        right: 50px;
      }
`
const Squre = styled.img`
    position: absolute;
    top: 275px;
    right: 252px;
    animation: ${a_ball} 1s ease 1.2s infinite normal both;
    @media screen and (max-width:960px){
        width: 25px;
        height: 25px;
        top: 130px;
        right: 132px;
    }
`
const Cycle = styled.img`
    position: absolute;
    top: 65px;
    right: 178px;
    animation: ${a_ball} 1s ease 1.5s infinite normal both;
    @media screen and (max-width:960px){
        width: 35px;
        height: 35px;
        top: 35px;
        right: 80px;
    }
`
const Cycle2 = styled.img`
     position: absolute;
     top: 255px;
     right: 128px;
     animation: ${a_ball} 1s ease 1.5s infinite normal both;
     @media screen and (max-width:960px){
        width: 38px;
        height: 38px;
        top: 115px;
        right: 48px;
     }
`
const Btc = styled.img`
     position: absolute;
     top: 290px;
     right: 180px;
     animation: ${a_ball} 1s ease 1.7s infinite normal both;
     @media screen and (max-width:960px){
        width: 45px;
        height: 45px;
        top: 140px;
        right: 80px;
     }
`
const Eth = styled.img`
     position: absolute;
     top: 169px;
     right: 65px;
     animation: ${a_ball} 1s ease 1.8s infinite normal both;
     @media screen and (max-width:960px){
        width: 35px;
        height: 50px;
        top: 75px;
        right: 20px;
     }
`
const Sat = styled.img`
    position: absolute;
    top: 129px;
    right: 205px;
    width: 104.3px;
    height: 120px;
    animation: ${a_ball} 1s ease 1.8s infinite normal both;
    @media screen and (max-width:960px){
       width: 55px;
       height: 65px;
       top: 69px;
       right: 75px;
    }
`