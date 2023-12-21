import styled from "styled-components";
import { BORDER_LEFT, BORDER_RIGHT, LEFT, RIGHT } from "../../assets";
import { MiddleLeftLine, MiddleRightLine } from "./line";

export default () => {
    return (
        <Wrapper id="market">
            <MiddleLeftLine isTop={false} />
            <Container>
                <Title data-wow-delay="0.3s" className="wow animate__fadeIn">
                    BitRGB Marketplace
                </Title>
                <SubTitle data-wow-delay="0.5s" className="wow animate__fadeIn">
                    BitRGB Set to Launch Bitcoin Asset Marketplace, Supporting BGB20/BGB21 Asset Issuance and Trading Formats. The BitRGB Asset Trading Market Exhibits Several Advantages Over BRC20 Markets in Scalability and Decentralization.
                </SubTitle>
            </Container>
            <Main>
                <Item>
                    <Left1>
                        <ItemWrapper>
                            <ItemTitle>
                                More Decentralized
                            </ItemTitle>
                            <ItemSubTitle>
                                Due to the current inadequacies in the RGB infrastructure, the initial version of the BitGRB protocol is built on Nostr. However, in subsequent iterative upgrades, support for depositing, withdrawing, issuing RGB assets, and fully decentralized asset trading based on RGB smart contracts will be incorporated.
                            </ItemSubTitle>
                        </ItemWrapper>
                    </Left1>
                    <Right1>
                        <Image src={RIGHT} />
                    </Right1>
                </Item>
                <Item>
                    <Left2>
                        <Image2 src={LEFT} />
                    </Left2>
                    <Right2>
                        <ItemWrapper2>
                            <ItemTitle>
                                Lower Transaction Costs
                            </ItemTitle>
                            <ItemSubTitle>
                                BitRGB's asset issuance consumes less Bitcoin block space, and it supports transaction batching, allowing users to commit multiple transfers to different asset addresses in a single Bitcoin transaction. This significantly reduces user transaction fee costs.
                            </ItemSubTitle>
                        </ItemWrapper2>
                    </Right2>
                </Item>
            </Main>
            <MiddleRightLine isTop={false} />
        </Wrapper>
    )
}


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
const Wrapper = styled.div`
    border-top: 2px solid rgba(255,255,255,0.1);
    position: relative;
    background-size: cover;
    padding-bottom: 80px;
    @media screen and (max-width:960px){
        height: auto;
        border: none;
        padding:50px 16px;
        box-sizing: border-box;
    }
`
const Container = styled.div`
    max-width: 1280px;
    margin: 0 auto;
    @media screen and (max-width:960px){
        max-width: 100%;
        width: 100%;
        position: relative;
        flex-direction: column;
        height: auto;
   }
`
const Title = styled.div`
    text-align: center;
    font-family: AvenirNext;
    font-size: 48px;
    font-weight: 600;
    line-height: 1.25;
    text-align: center;
    color: #fff;
    width:894px;
    text-align: center;
    margin:100px auto 0;
    @media screen and (max-width:960px){
      font-size: 24px;
      line-height: 1.33;
      width:100%;
    }
`
const Main = styled.div`
    margin-top:104px;
    @media screen and (max-width:960px){
        margin-top:24px ;
    }
`
const Item = styled.div`
    display: flex;
    @media screen and (max-width:960px){
        flex-direction: column;
        
    }
`
const Left1 = styled.div`
    background-image:url(${BORDER_LEFT});
    flex:1;
    background-size: 100% 100%;
    box-sizing: border-box;
    height: 560px;
    position: relative;
   
    @media screen and (max-width:960px){
        width:100%;
        order:2;
        margin-top: 40px;
        height: auto;
        background-image: none;
    }
`
const Right1 = styled.div`
    flex:1;
    height: 560px;
    display: flex;
    align-items: center;
    justify-content: center;
    @media screen and (max-width:960px){
    order:1;
    margin-top: 24px;
    }
`
const Image = styled.img`
    width:621px;
    height:321px;
    @media screen and (max-width:960px){
        width:100%;
        height: auto;
    }
`
const Image2 = styled.img`
    width:608px;
    height: 349px;
    @media screen and (max-width:960px){
        width:100%;
        height: auto;
    }
`
const Left2 = styled.div`
    flex:1;
    height: 560px;
    display: flex;
    align-items: center;
    justify-content: center;
    @media screen and (max-width:960px){
        margin-top: 40px;
    }
`
const Right2 = styled.div`
    background-image:url(${BORDER_RIGHT});
    flex:1;
    background-size: 100% 100%;
    box-sizing: border-box;
    height: 560px;
    position: relative;
    @media screen and (max-width:960px){
        margin-top: 40px;
        height: auto;
        background-image: none;
    }

`
const ItemWrapper = styled.div`
    position: absolute;
    top:60px;
    right:60px;
    @media screen and (max-width:960px){
        position: initial;
    }
`
const ItemWrapper2 = styled.div`
    position: absolute;
    top:60px;
    left:60px;
    @media screen and (max-width:960px){
        position: initial;
    }
`
const ItemTitle = styled.div`
    width: 580px;
    font-family: AvenirNext;
    font-size: 32px;
    font-weight: 600;
    color: #fff;
    @media screen and (max-width:960px){
        width:100%;
        font-size: 20px;
        line-height:1.3;
    }
`
const ItemSubTitle = styled.div`
    width: 580px;
    margin-top: 40px;
    font-size: 16px;
    font-weight: 500;
    line-height: 1.5;
    letter-spacing: -0.1px;
    color: rgba(255,255,255,0.6);
    @media screen and (max-width:960px){
          width:100%;
          margin-top: 16px;
          font-size: 12px;
    }
`