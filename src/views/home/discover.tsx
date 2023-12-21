import styled from "styled-components";
import { BORDER1, BORDER2, BORDER3, PHONE_BORDER21, RGB20, RGB21, RGB22 } from "../../assets";
import { MiddleLeftLine, MiddleRightLine } from "./line";

export default () => {

    return (
        <Wrapper id="assets">
            <MiddleLeftLine isTop={false} />
            <Container>
                <Title data-wow-delay="0.3s" className="wow animate__fadeIn">
                    BitRGB Assets
                </Title>
                <SubTitle data-wow-delay="0.4s" className="wow animate__fadeIn">
                    BitRGB provides asset issuers with the flexibility to write customized issuance contracts, allowing them to define various types of assets and utilize different validation rules during transfers.
                    <br />
                    The BitRGB Asset Management Platform offers 3 types of BGB asset issuance solutions for issuers
                </SubTitle>
                <Main data-wow-delay="0.6s" className="wow animate__fadeIn">
                    <Item>
                        <ItemText>
                            RGB20 tokens represent the issuance of fungible tokens. Following standardized issuance protocols, BGB20 tokens are interchangeable and replaceable. They adhere to a set of standardized issuance rules.
                        </ItemText>
                        <Icon src={RGB20} />
                    </Item>
                    <Item2>
                        <ItemText>
                            RGB21 is designated for the issuance of Non-Fungible Tokens (NFTs). BGB21 represents unique digital assets that are indivisible and distinguishable, typically used to signify ownership of collectibles.
                        </ItemText>
                        <Icon src={RGB21} />
                    </Item2>
                    <Item3>
                        <ItemText>
                            RGB22 tokens are employed to establish and validate decentralized electronic identities. This enables users to maintain control over their personal information while interacting with various services and applications within a decentralized framework.
                        </ItemText>
                        <Icon src={RGB22} />
                    </Item3>
                </Main>
            </Container>
            <MiddleRightLine isTop={false} />
        </Wrapper>
    )
}

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
    margin: 0 auto;
    @media screen and (max-width:960px){
        width:100%;
    }
`
const TagWrapper = styled.div`
    margin-top: 100px;
    display: flex;
    justify-content: center;
    @media screen and (max-width:960px){
        margin:0;
    }
`
const Title = styled.div`
    margin-top:100px;
    text-align: center;
    font-family: AvenirNext;
  font-size: 48px;
  font-weight: 600;
  line-height: 1.25;
  text-align: center;
  color: #fff;
  @media screen and (max-width:960px){
    font-size: 24px;
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
    gap:25px;
    @media screen and (max-width:960px){
        flex-direction:column ;
        margin-top:24px ;
    }
`
const Item = styled.div`
    flex:1;
    height:442px;
    box-sizing:border-box ;
    padding:40px;
    display:flex ;
    flex-direction:column;
    justify-content:space-between ;
    background-image:url(${BORDER1}) ;
    background-size:100% 100% ;
    @media screen and (max-width:960px){
        background-image:url(${PHONE_BORDER21}) ;
        flex:auto;
        height:392px ;
        padding:40px 24px 24px;
    }
`
const Item2 = styled(Item)`
    background-image:url(${BORDER2}) ;
    height: 444px;
    @media screen and (max-width:960px){
        height:410px ;
    }
`
const Item3 = styled(Item)`
    background-image:url(${BORDER3}) ;
    @media screen and (max-width:960px){
    height:410px ;
    }
`
const ItemText = styled.div`
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
  }
`
const Icon = styled.img`
    width:48px;
    height: 48px;
`