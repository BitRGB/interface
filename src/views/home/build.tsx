import styled from "styled-components";
import { IMGAE1, IMGAE2, IMGAE3, IMGAE4 } from "../../assets";
import { MiddleLeftLine, MiddleRightLine } from "./line";

export default () => {
    return (
        <Wrapper id="ecosystem">
            <MiddleLeftLine isTop={false} />
            <Container>
                <Title data-wow-delay="0.3s" className="wow animate__fadeIn">
                    Ecosystem
                </Title>
                <SubTitle data-wow-delay="0.4s" className="wow animate__fadeIn">
                    BitRGB will undergo multi-stage development for the Bitcoin ecosystem
                </SubTitle>
            </Container>
            <Main>
                <Content>
                    <Item>
                        <ItemTag>01</ItemTag>
                        <ImageWrapper>
                            <Image src={IMGAE1} />
                        </ImageWrapper>
                        <ItemTitle>
                            Phase One
                        </ItemTitle>
                        <ItemSubtitle>
                            Asset issuance and trading on the BitRGB platform, initially supporting RGB20 asset issuance. Subsequent versions will support additional asset formats such as RGB21/RGB22.
                        </ItemSubtitle>
                    </Item>
                    <Item>
                        <ItemTag2>02</ItemTag2>
                        <ImageWrapper>
                            <Image1 src={IMGAE2} />
                        </ImageWrapper>
                        <ItemTitle>
                            Phase Two
                        </ItemTitle>
                        <ItemSubtitle>
                            Support for arbitrary users to issue RGB20 format assets on the BitRGB platform, achieving fair launches for any RGB20 format assets.
                        </ItemSubtitle>
                    </Item>
                    <Item>
                        <ItemTag>03</ItemTag>
                        <ImageWrapper>
                            <Image2 src={IMGAE3} />
                        </ImageWrapper>
                        <ItemTitle>
                            Phase Three
                        </ItemTitle>
                        <ItemSubtitle>
                            Support for depositing and withdrawing platform RGB20 assets.
                        </ItemSubtitle>
                    </Item>
                    <Item>
                        <ItemTag2>04</ItemTag2>
                        <ImageWrapper>
                            <Image3 src={IMGAE4} />
                        </ImageWrapper>
                        <ItemTitle>
                            Phase Four
                        </ItemTitle>
                        <ItemSubtitle>
                            Achieve more decentralized asset issuance and trading functionalities through RGB smart contracts.
                        </ItemSubtitle>
                    </Item>
                </Content>
            </Main>
            <MiddleRightLine isTop={false} />
        </Wrapper>
    )
}

const Wrapper = styled.div`
     border-top: 2px solid rgba(255,255,255,0.1);
    position: relative;
    background-size: cover;
    @media screen and (max-width:960px){
        height: auto;
        border: none;
        padding:50px 16px;
        box-sizing: border-box;
    }
`
const Container = styled.div`
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
    margin-top: 100px;
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
    width: 960px;
    margin:0 auto;
    margin-top: 24px;
    text-align:center ;
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
    padding:0 44px 0 41px;
    box-sizing:border-box ;
    @media screen and (max-width:960px){
       padding:0;
       margin-top:40px ;
    }
`
const Content = styled.div`
     border-top: 1px solid rgba(255,255,255,0.1);
     width:100%;
     height:672px ;
     display:flex ;
     @media screen and (max-width:960px){
        flex-direction: column;
        height:auto ;
        border:none ;
        gap:40px;
    }
`
const Item = styled.div`
    border-right:1px solid  rgba(255,255,255,0.1);
    flex:1;
    box-sizing:border-box ;
    padding:40px;
    &:nth-last-child(1){
        border-right:none;
    }
    @media screen and (max-width:960px){
        border:none;
        padding:0;
    }
`
const ItemTag = styled.div`
    width: 50px;
    height: 28px;
    box-sizing: border-box;
    border-radius: 20px;
    background-color: #fbf459;
    display: flex;
    align-items:center ;
    justify-content: center;
    font-family: AvenirNext;
    font-size: 16px;
    font-weight: 600;
    color: #000;
`
const ItemTag2 = styled(ItemTag)`
    background-color:#fff ;
`
const ImageWrapper = styled.div`
    margin-top:40px;
    height:120px ;
    display: flex;
    align-items: center;
    @media screen and (max-width:960px){
        margin-top:24px ;
        height:auto ;
    }
`
const Image = styled.img`
    width:78px;
    height:96px ;
`
const Image1 = styled.img`
    width:94px;
    height:65px ;
`
const Image2 = styled.img`
    width:104;
    height:68px ;
`
const Image3 = styled.img`
    width:70px;
    height:89px ;
`
const ItemTitle = styled.div`
    margin-top:24px;
    font-family: AvenirNext;
    font-size: 32px;
    font-weight: 600;
    color: #fff;
    @media screen and (max-width:960px){
      font-size: 24px;
    }
`
const ItemSubtitle = styled.div`
    font-family: SourceCodeProRoman-Medium;
    font-size: 16px;
    font-weight: 500;
    line-height: 1.5;
    color:rgba(255,255,255,0.6);
    margin-top:24px ;
    @media screen and (max-width:960px){
      font-size: 14px;
      margin-top:16px ;
    }
`