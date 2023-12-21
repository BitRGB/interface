import { useState } from "react";
import styled from "styled-components";
import { ADVAN_BORDER, ARROW_RIGHT, ASSET_BG, BG_ECO, BOX_BORDER, ECOSYSTEM, ICON_TAG_LEFT, ICON_TAG_RIGHT, PHONE_BORDER11 } from "../../assets";
import { MiddleLeftLine, MiddleRightLine, Tag, TagLeftIcon, TagRightIcon, TagText } from "./line";
import PhoneAdvand from "../components/phoneAdvand";
import Button from '../components/button'
import { useMediaQuery } from "usehooks-ts";
export default () => {
    const matches = useMediaQuery('(max-width: 960px)')
    return (
        <Wrapper id="innovation">
            <MiddleLeftLine isTop={false}></MiddleLeftLine>
            <Main>
                <Container>
                    <Title data-wow-delay="0.3s" className="wow animate__fadeIn">
                        Innovations
                    </Title>
                    <SubTitle data-wow-delay="0.5s" className="wow animate__fadeIn">
                        BitRGB, built on the RGB open protocol, aims to provide a more scalable, private, and forward-looking solution for managing Bitcoin ecosystem assets, including issuance and trading.
                    </SubTitle>
                    <PhoneAdvand />
                </Container>
                <Animation>
                    <Ul id="advantages_ul">
                        <Item>
                            <VedioWrapper>
                                <Vedio loop={true} muted={true} src={`${process.env.PUBLIC_URL}/video/video1.mp4`} autoPlay={true} />
                            </VedioWrapper>
                            <ItemBox isPhone={matches}>
                                <ItemBoxContent>
                                    <ItemTitle>
                                        High Scalability
                                    </ItemTitle>
                                    <ItemText>
                                        Utilizing the RGB protocol, BitRGB implements customizable off-chain smart contracts, storing specific transaction data off-chain and using the Bitcoin blockchain solely as a commitment layer. This approach enables BitRGB to establish a more efficient and scalable Bitcoin smart contract ecosystem, facilitating more effective Bitcoin asset issuance and trading.
                                    </ItemText>
                                </ItemBoxContent>
                            </ItemBox>
                        </Item>
                        <Item>
                            <VedioWrapper>
                                <Vedio loop={true} muted={true} src={`${process.env.PUBLIC_URL}/video/video2.mp4`} autoPlay />
                            </VedioWrapper>
                            <ItemBox isPhone={matches}>
                                <ItemBoxContent>
                                    <ItemTitle>
                                        Inheriting Bitcoin Mainnet Security
                                    </ItemTitle>
                                    <ItemText>
                                        Built upon the RGB protocol's single-use-seals concept, BitRGB combines asset ownership with Bitcoin UTXOs. By combining client-side validation with transaction commitments submitted to the Bitcoin blockchain, BitRGB prevents double spending. BitRGB assets benefit from the robust security provided by the entire Bitcoin blockchain hash power, inheriting the exceptionally high security of the Bitcoin network.
                                    </ItemText>
                                </ItemBoxContent>
                            </ItemBox>
                        </Item>
                        <Item>
                            <VedioWrapper>
                                <Vedio loop={true} muted={true} src={`${process.env.PUBLIC_URL}/video/7.mp4`} autoPlay />
                            </VedioWrapper>
                            <ItemBox isPhone={matches}>
                                <ItemBoxContent>
                                    <ItemTitle>
                                        Privacy Protection Implementation
                                    </ItemTitle>
                                    <ItemText>
                                        BitRGB prioritizes user privacy using blinded UTXOs and the zero-knowledge Bulletproof mechanism from Blockstream. When a recipient requests payment, the sender doesn't disclose the UTXO for receiving tokens but transfers them to a UTXO generated by the recipient, ensuring transaction privacy during verification and preventing future asset owners from accessing histories.
                                    </ItemText>
                                </ItemBoxContent>
                            </ItemBox>
                        </Item>
                    </Ul>
                </Animation>
            </Main>
            <AssetBg />
            <MiddleRightLine isTop={false} />
        </Wrapper>
    )
}
const AssetBg = styled.div`
    background:url(${ASSET_BG}) ;
    background-size: cover;
    width:1247px;
    height:1385px ;
    position:absolute ;
    right:0 ;
`
const Wrapper = styled.div`
    height: 1929px;
    border-top: 2px solid rgba(255,255,255,0.1);
    position: relative;
    @media screen and (max-width:960px){
        height: auto;
        padding:50px 16px 120px;
        border: none;
    }
`
const Main = styled.div`
    position: sticky;
    top:0;
    height: 100vh;
    width: 100%;
    @media screen and (max-width:960px){
        height: auto;
    }
    @media screen and (min-width:960px) and (max-width:1440px){
        height: 959px;
   }
`
const Container = styled.div`
    max-width: 1280px;
    margin: 0 auto;
    @media screen and (max-width:960px){
        height: auto;
        width: 100%;
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
const Animation = styled.div`
    margin-top: 80px;
    overflow: hidden;
    position: relative;
    z-index: 888;
    @media screen and (max-width:960px){
        display: none;
    }
`
const Ul = styled.ul`
    list-style: none;
    display: flex;
    width: 2250.4px;
`
const Item = styled.li`
    width: 736.8px;
    height: 565px;
    position: relative;
    margin-right: 20px;
    &:nth-last-child(1){
      margin-right: 0;
    }
`
const VedioWrapper = styled.div`
    border-radius: 42px;
    border: solid 2px #3d4147;
    background-color: #0d121a;
    height: 415px;
    width:100%;
`
const Vedio = styled.video`
    width: 100%;
    height: 100%;
    border-radius: 42px;
`

const ItemBox = styled.div<{ isPhone: boolean }>`
   width: 690px;
   height: 288px;
   position: absolute;
   bottom:0 ;
   background:url(${({ isPhone }) => isPhone ? PHONE_BORDER11 : BOX_BORDER});
   background-size: 100% 100%;
   border-radius: 40px;
   -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    box-sizing: border-box;
    padding:1px;
    left:25px;
`
const ItemBoxContent = styled.div`
    background:rgba(13, 18, 26, 0.4);
    width: 100%;
    box-sizing: border-box;
    padding: 40px;
    border-radius: 40px;
    height: 100%;
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
`
const ItemTitle = styled.div`
    font-size: 18px;
    font-weight: 500;
    line-height: 1.44;
    letter-spacing: normal;
    color: #fff;
`
const ItemText = styled.div`
    margin-top: 15px;
    font-size: 16px;
    font-weight: 500;
    line-height: 1.44;
    letter-spacing: normal;
    color: rgba(255,255,255,0.6);
`