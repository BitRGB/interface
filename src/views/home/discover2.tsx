import styled from "styled-components";
import { BG2, ICON_CHAIN, ICON_CROSSCHAIN, ICON_ROLLUP } from "../../assets";
import { MiddleLeftLine, MiddleRightLine } from "./line";

export default () => {
    return (
        <Wrapper id="advantages">
            <Bg2 />
            <MiddleLeftLine isTop={false} />
            <Container>
                <Title data-wow-delay="0.3s" className="wow animate__fadeIn">
                    Competitive Advantages of BitRGB
                </Title>
                <Main data-wow-delay="0.3s" className="wow animate__fadeIn">
                    <Item>
                        <Icon src={ICON_CROSSCHAIN} />
                        <Text>
                            Addressing Blockchain Waste and Network Congestion: BRC20 faces significant challenges related to block waste and network congestion. BitRGB achieves a magnitude increase in scalability through off-chain transfers, mitigating these issues effectively.
                        </Text>
                    </Item>
                    <Item>
                        <Icon src={ICON_ROLLUP} />
                        <Text>
                            Enabling Diverse Smart Contract Scenarios: Unlike BRC20, which lacks support for smart contract scenarios, BitRGB is Turing-complete, allowing for a broader range of scenarios such as lending and other diversified use cases.
                        </Text>
                    </Item>
                    <Item>
                        <Icon src={ICON_CHAIN} />
                        <Text>
                            BRC20 heavily relies on centralized indices for resolution, and the validity and security of assets require trust in centralized index platforms. Through continuous iterative upgrades, the BitRGB platform will implement fully decentralized asset trading based on RGB smart contract functionality.
                        </Text>
                    </Item>
                </Main>
            </Container>
            <MiddleRightLine isTop={false} />
        </Wrapper>
    )
}
const Bg2 = styled.div`
    width:748px;
    height:994px;
    top:0 ;
    left:0;
    position:absolute ;
    background-image: url(${BG2});
    background-size:cover ;
    @media screen and (max-width:960px){
        display:none ;
    }
`
const Wrapper = styled.div`
    border-top: 2px solid rgba(255,255,255,0.1);
    position: relative;
    background-size: cover;
    padding-bottom: 100px;
    @media screen and (max-width:960px){
        height: auto;
        border: none;
        padding:50px 16px;
        box-sizing: border-box;
    }
`
const Container = styled.div`
    width:1290px;
    margin:0 auto;
    @media screen and (max-width:960px){
        width:100%;
    }
`

const Title = styled.div`
    margin-top: 100px;
    text-align: center;
    font-family: AvenirNext;
    font-size: 48px;
    font-weight: 600;
    line-height: 1.25;
    text-align: center;
    color: #fff;
    width:784px;
    margin:100px auto 0;
    @media screen and (max-width:960px){
      font-size: 24px;
      width:100%;
      margin-top: 0;
    }
`
const SubTitle = styled.div`
    font-size: 16px;
    font-weight: 500;
    line-height: 1.5;
    letter-spacing: normal;
    text-align: center;
    color: rgba(255,255,255,0.6);
    width: 1030px;
    margin:0 auto;
    margin-top: 24px;
    @media screen and (max-width:960px){
      margin-top: 16px;
      font-size: 14px;
      text-align: center;
      width: 100%;
      line-height: 18px;
    }
`

const Main = styled.div`
    margin-top: 80px;
    display: flex;
    gap:40px;
    @media screen and (max-width:960px){
        flex-direction:column ;
        margin-top:24px ;
    }
`

const Item = styled.div`
    flex:1;
`
const Icon = styled.img`
    width:48px;
    height:48px;

`
const Text = styled.div`
    margin-top:60px ;
    font-family: SourceCodeProRoman-Medium;
    font-size: 16px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    font-variation-settings: normal;
    line-height: 1.5;
    letter-spacing: normal;
    color: #fff;
    @media screen and (max-width:960px){
      font-size:14px ;
      margin-top:24px ;
    }
`
