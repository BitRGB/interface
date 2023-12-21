import { ICON_INFO, ICON_RGBS, ICON_RGB_BTC } from "assets";
import Process from "components/process";
import { useIsPhone } from "hooks";
import { useMemo } from "react";
import { useMintState } from "store/mint";
import styled from "styled-components";
import { formatStats } from "utils";
import MintContent from "./mintContent";

export default () => {
    const isPhone = useIsPhone()
    const { round2: roundInfo } = useMintState()
    const mintScale = useMemo(() => {
        if (!roundInfo) {
            return 0
        }
        const minted = Number(roundInfo.mintAmount)
        const total = Number(roundInfo.totalAmount)
        const scale = minted * 100 / total
        return scale.toFixed(2)
    }, [roundInfo])

    const totalSats = useMemo(() => {
        if (!roundInfo) {
            return 0
        }
        const total = Number(roundInfo.totalAmount)
        const price = Number(roundInfo.priceSats)
        return total * price
    }, [roundInfo])
    const endTime = useMemo(() => {
        const today = new Date()
        const endTime = `${today.getFullYear()}-12-23 23:59:59`
        return new Date(endTime)
    }, [])
    return (
        <Wrapper>
            <Header>
                <Between>
                    <AlignCenter>
                        <Icon src={ICON_RGB_BTC} />
                        <Container>
                            <Name>$ RGBS - Fair Mint</Name>
                            <Desc>
                                The First RGB20 Aseet Issued by BitRGB
                            </Desc>
                        </Container>
                    </AlignCenter>
                    <RuleContainer>
                        <RuleInfo>
                            <RuleText>Rules</RuleText>
                            <InfoIcon src={ICON_INFO} />
                        </RuleInfo>
                        <RuleModal>
                            <RuleTitle>$RGBS Fair Mint Rules：</RuleTitle>
                            <RuleContent>
                                1. After Mint starts, there will be a six-hour whitelist protection period, during which whitelist users have priority for minting.<br />
                                2. After the six-hour protection period, fair mint activates.
                            </RuleContent>
                            <LinkRule>How to be whitelisted?</LinkRule>
                        </RuleModal>
                    </RuleContainer>
                </Between>
                <ProcessWrapper>
                    {isPhone && <AlignProcessCenter style={{ marginBottom: "13px" }}>
                        <Text>Total Raise</Text>
                        <Amount>{formatStats(roundInfo?.totalAmount || "0")} RGBS</Amount>
                        <Dollar>～ {formatStats(totalSats)} Sats</Dollar>
                    </AlignProcessCenter>
                    }
                    <Process width={mintScale} />
                    <ProcessBetween>
                        {!isPhone ? <AlignProcessCenter>
                            <Text>Total Raise</Text>
                            <Amount>{formatStats(roundInfo?.totalAmount || "0")} RGBS</Amount>
                            <Dollar>～ {formatStats(totalSats)} Sats</Dollar>
                        </AlignProcessCenter>
                            : <div></div>
                        }
                        <ProcessValue>{mintScale}%</ProcessValue>
                    </ProcessBetween>
                </ProcessWrapper>
            </Header>
            <Content>
                <MintContent />
            </Content>
        </Wrapper>
    )
}

const StartTime = styled.div`
  font-size: 14px;
  color: #fbfdfc;
`

const Wrapper = styled.div`
    border-radius: 8px;
    border: solid 1px rgba(255,255,255,0.1);
    background-color:rgba(25,25,25,0.1);
    width: 1000px;
    position: relative;

    @media screen and (max-width:960px){
        width:100%;
    }
`
const Tag = styled.img`
    width: 90px;
    height: 24px;
    position: absolute;
    top:-12px;
    left:0;
`
const Header = styled.div`
    width: 100%;
    box-sizing: border-box;
    padding:30px;
    @media screen and (max-width:960px){
        padding:20px 15px;
    }
`
const Content = styled.div`
    width: 100%;
    background-color: rgba(255,255,255,0.03);
`
const Between = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const AlignCenter = styled.div`
    display: flex;
    align-items: center;
    gap:20px;
    @media screen and (max-width:960px){
        gap:10px;
    }
`
const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap:8px;
    @media screen and (max-width:960px){
        gap:7.5px;
    }
`
const Icon = styled.img`
    width:50px;
    height:50px;
    @media screen and (max-width:960px){
        width:50px;
        height:50px;
    }
`
const Name = styled.div`
    font-size: 20px;
    color: #feffff;
    @media screen and (max-width:960px){
        font-size: 16px;
    }
`

const Desc = styled.div`
    font-size: 14px;
    color: #999;
    @media screen and (max-width:960px){
        font-size: 12px;
    }
`
const ProcessWrapper = styled.div`
    margin-top: 30px;
`
const ProcessBetween = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 13px;
`
const AlignProcessCenter = styled.div`
    display: flex;
    align-items: center;
    gap:5px;
`
const Text = styled.span`
    font-size: 14px;
    color: #feffff;
    @media screen and (max-width:960px){
        font-size: 12px;
    }
`
const Amount = styled.span`
    font-size: 14px;
    color: #f9ee0e;
    @media screen and (max-width:960px){
        font-size: 12px;
    }
`
const Dollar = styled.span`
    font-size: 12px;
    color:#999;
`
const ProcessValue = styled.span`
    font-size: 14px;
    color: #26c040;
    @media screen and (max-width:960px){
        font-size: 12px;
    }
`

const RuleModal = styled.div`
    position: absolute;
    border-radius: 2px;
    border: solid 1px #282d35;
    background-color: #101523;
    width:460px;
    padding:20px;
    box-sizing: border-box;
    backdrop-filter:blur(10px);
    right:0;
    top:40px;
    z-index: 5;
    display: none;
    @media screen and (max-width:960px){
        width:calc(100vw - 40px);
        
    }
`
const RuleTitle = styled.div`
    font-size: 14px;
    line-height: 1.43;
    color:#fff;
`
const RuleContent = styled.div`
    margin-top:10px;
    font-size: 14px;
    line-height: 1.43;
    color: #fff;
`

const RuleInfo = styled.div`
    cursor: pointer;
    width: 85px;
    height: 30px;
    border-radius: 2px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid rgba(255,255,255,0.1);
    gap:6px;
    position: relative;
   
`
const RuleText = styled.span`
    font-size: 14px;
    color:#fff;
`
const InfoIcon = styled.img`
    width:14px;
    height:14px;
`
const LinkRule = styled.a`
    font-size: 14px;
    line-height: 1.43;
    color: #f2e70e;
    margin-top: 15px;
    cursor: pointer;
    display: inline-block;
`
const RuleContainer = styled.div`
    position: relative;
    height: 51px;
    display: flex;
    align-items: center;
    &:hover ${RuleModal}{
        display: block;
    }
`