import { ButtonBase, Range, SubmitLoading, Toast } from "components";
import styled from "styled-components";
import Countdown, { CountdownRenderProps } from "react-countdown";
import { useEffect, useMemo, useState } from "react";
import { Numberic } from "components/inputs";
import { useMint, useMintState } from "store/mint";
import { useApplicationState } from "store/application";
import { computeBtcDollar, formatStats } from "utils";
import { useBtcSatsToken, useConnectWallet } from "hooks";
import { ICON_INFO } from "assets";


const rendererCountdown = ({ days, hours, minutes, seconds, completed }: CountdownRenderProps) => {
    return <> {hours < 10 ? `0${hours}` : hours}h : {minutes < 10 ? `0${minutes}` : minutes}m : {seconds < 10 ? `0${seconds}` : seconds}s </>;
};
export default () => {
    const { address } = useApplicationState()
    const { round2, newUserMintInfo, submitLoading, whiteList } = useMintState()
    const [amount, setAmount] = useState("0")
    const [max, setMax] = useState("1")
    const [repeat, setRepeat] = useState("1")
    const [complete, setComplete] = useState(false)
    // 用户当前最大可以购买的次数
    const [currentMax, setCurrentMax] = useState("0")
    const { btcPrice } = useApplicationState()
    const btcStas = useBtcSatsToken()
    const onMint = useMint()
    const hanldeConnectWallet = useConnectWallet()

    const endTime = useMemo(() => {
        if (round2) {
            return new Date(round2.end * 1000)
        }
        return new Date(Date.now() + 5 * 3600)
    }, [round2])

    const handleRepeatChange = (value: string) => {
        setRepeat(value)
    }
    const totalPay = useMemo(() => {
        const amounts = Number(amount || "0")
        const price = Number(round2?.priceSats || "0")
        const re = Number(repeat)
        return amounts * re * price
    }, [repeat, round2, amount])

    const formatBtcAmount = useMemo(() => {
        return (totalPay / Math.pow(10, 8)).toFixed(4)
    }, [totalPay])

    // 用户购买的次数= 购买的数量/ 最小数量
    const myMintNum = useMemo(() => {
        if (!newUserMintInfo || !round2) {
            return 0
        }
        const minAmount = Number(round2.minAmount)
        // 已购买的数量
        const Amount = Number(newUserMintInfo.boughtAmount)
        // 重复的次数
        return Amount / minAmount
    }, [newUserMintInfo, round2])

    useEffect(() => {
        if (round2) {
            const minAmount = Number(round2.minAmount)
            const maxAmount = Number(round2.maxAmount)
            const num = maxAmount / minAmount
            setAmount(round2.minAmount)
            setMax(num.toString())
        }
    }, [round2])

    useEffect(() => {
        const m = Number(max)
        setCurrentMax((m - myMintNum).toString())
    }, [max, myMintNum])

    const getButtonText = () => {
        const now = Date.now()
        const endTimeSecond = endTime.getTime()
        if (!complete) {
            // 在白名单保护期
            if (now < endTimeSecond) {
                // 不在白名单
                if (!(whiteList && Number(whiteList.maxAmount || "0") > 0)) {
                    return { text: "No Permission", disabled: true }
                }
            }
        }
        // 最大次数
        const mintMax = Number(currentMax)
        // 以mint 最大次数
        if (!round2 || mintMax <= 0) {
            return { text: "Limit reached", disabled: true }
        }
        // 足够balance
        const balance = Number(btcStas?.balance || "0")
        if (balance == 0 || balance < totalPay) {
            return { text: "Insufficient balance", disabled: true }
        }

        return { text: "Mint", disabled: false }
    }
    // 先查看用户总的mint 次数，是否超过了最大值

    // 是否还在还名单保护期，查看用户是否在白名单中，没有则显示暂无权限购买,在则可以直接mint

    // 白名单结束

    const handleMint = async () => {
        const { disabled } = getButtonText()
        if (disabled) {
            return
        }
        const now = Date.now()
        const endTimeSecond = endTime.getTime()
        if (!repeat) {
            Toast.error("please enter mint repeat")
            return
        }
        let roundId = "2"
        // 在白名单保护期
        if (now < endTimeSecond) {
            roundId = "1"
        }
        await onMint(round2!.priceSats, amount, roundId, repeat)
    }
    const isShowWhiteList = () => {
        // 倒计时完成
        if (complete) {
            return false
        }
        const now = Date.now()
        const endTimeSecond = endTime.getTime()
        // 是否在白名单保护期
        if (now < endTimeSecond) {
            // 用户是否在白名单
            if (whiteList && Number(whiteList.maxAmount) > 0) {
                return false
            }
            return true
        }
        return false
    }
    return (
        <Wrapper>
            <Between>
                <Title>Mint Quota</Title>
                <Balance>Balance：{formatStats(btcStas?.balance || "0")} Sats</Balance>
            </Between>
            <Form>
                <Container>
                    <Label>
                        Amounts
                    </Label>
                    <InputWraper>
                        <Input value={amount} disabled={true} />
                        <Center>
                            <Balance>~ {computeBtcDollar(btcPrice, Number(round2?.minAmount || "0") * Number(round2?.priceSats || "0"))}</Balance>
                            <Unit>RGBS</Unit>
                        </Center>
                    </InputWraper>
                </Container>
                <Container>
                    <Label>Repeat Mint({myMintNum}/{max})</Label>
                    <Center2>
                        <Numberic min="1" max={currentMax} value={repeat} onChange={handleRepeatChange} />
                        <Range min="1" max={currentMax} value={repeat} onChange={handleRepeatChange} />
                    </Center2>
                </Container>
            </Form>
            <Block>
                <Row>
                    <Text>Mint Price</Text>
                    <Text>1 RGBS = {formatStats(round2?.priceSats || "0")} Sats</Text>
                </Row>
                <Row>
                    <AlignCenter>
                        <MintFeeContainer>
                            <Text>Mint Fee</Text>
                            <TipIcon src={ICON_INFO} />
                        </MintFeeContainer>
                        <FeeRule>
                            <FeeRuleTitle>
                                Mint fees are utilized for:
                            </FeeRuleTitle>
                            <FeeRuleContent>
                                1. Development Fund:<br />
                                Supporting ongoing project development.<br />
                                2. Token Buyback and Burn:<br />
                                Maintaining a balanced token ecosystem through buybacks and burns.
                            </FeeRuleContent>
                        </FeeRule>
                    </AlignCenter>
                    <TotalPay>
                        <FlexCenter>
                            <Text>{formatStats(totalPay)} Sats</Text>
                            <TotalDollar>～ {computeBtcDollar(btcPrice, totalPay)}</TotalDollar>
                        </FlexCenter>
                        <Balance>～{formatBtcAmount} BTC</Balance>
                    </TotalPay>
                </Row>
            </Block>
            <ButtonWrapper>
                {!address ? <Button onClick={hanldeConnectWallet}>Connect Wallet</Button> : <Button
                    onClick={handleMint}
                    disabled={getButtonText().disabled || submitLoading}
                >
                    {submitLoading && <SubmitLoading />}
                    {getButtonText().text}
                </Button>
                }
            </ButtonWrapper>
            {isShowWhiteList() && <WhiteList>
                WL Protection Period: <Countdown
                    daysInHours={true}
                    date={endTime}
                    zeroPadTime={2}
                    renderer={rendererCountdown}
                    onComplete={() => setComplete(true)}
                ></Countdown>
            </WhiteList>
            }
        </Wrapper>
    )
}



const Unit = styled.span`
    font-size: 16px;
    color: #fdffff;
`
const Wrapper = styled.div`
 width:100%;
    height:100%;
    box-sizing: border-box;
    padding:30px;
    @media screen and (max-width:960px){
        padding:20px 15px;
    }
`

const Between = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const Title = styled.span`
    font-size: 16px;
    color: #feffff;
`
const Balance = styled.span`
    font-size: 14px;
    color: #999;
`
const Block = styled.div`
    margin-top: 15px;
    padding: 20px;
    box-sizing: border-box;
    border-radius: 5px;
    border: solid 1px rgba(255,255,255,0.1);
    display: flex;
    flex-direction: column;
    gap:20px;
    @media screen and (max-width:960px){
        padding:20px 10px;
    }
`
const Row = styled.div`
    display: flex;
    justify-content: space-between;
`
const Text = styled.span`
    font-size: 16px;
    color: #feffff;
    @media screen and (max-width:960px){
        font-size: 14px;
    }
`
const TotalPay = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap:5px;
`
const FlexCenter = styled.div`
    display: flex;
    gap:5px;
`
const TotalDollar = styled.span`
    font-size: 14px;
    color: #fff;
`
const ButtonWrapper = styled.div`
    margin-top: 20px;
    display: flex;
    justify-content: center;
`

const Button = styled(ButtonBase)`
     min-width: 210px;
     width:auto;
     padding:0 20px;
    height: 50px;
    border-radius: 5px;
     background-color: #115dfd;
    font-size: 18px;
    color:#fff;
`
const WhiteList = styled.div`
    margin-top: 20px;
    display: flex;
    justify-content: center;
    font-size: 14px;
    color: #fbfdfc;
`

const Form = styled.div`
    margin-top: 30px;
    display: flex;
    gap:20px;
    @media screen and (max-width:960px){
        flex-direction: column;
    }
`
const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap:15px;
    flex:1;
    @media screen and (max-width:960px){
       width:100%;
       flex: initial;
   }
`
const Label = styled.div`
    font-size: 14px;
    color:#999;
`

const InputWraper = styled.div`
    
    display: flex;
    border-radius: 5px;
    border: solid 1px rgba(255, 255, 255, 0.1);
    background-color: #222b39;
    box-sizing: border-box;
    padding:0 20px;
    height: 60px;
    width:100%;
    @media screen and (max-width:960px){
        flex: initial;
    }
`

const Input = styled.input`
    flex:1;
    width: 100%;
    border: none;
    outline: none;
    background-color: transparent;
    font-size: 20px;
    color: #feffff;
    &::placeholder{
        color:rgba(255,255,255,0.5);
    }
`
const Center = styled.div`
    display: flex;
    align-items: center;
    gap:20px;
`
const Center2 = styled(Center)`
    @media screen and (max-width:960px){
        
    }
`


const FeeRule = styled.div`
    width: 460px;
    border-radius: 2px;
    border: solid 1px #282d35;
    background-color: #141c25;
    box-sizing: border-box;
    padding:19px;
    position: absolute;
    z-index: 5;
    top:30px;
    left:0;
    display: none;
    @media screen and (max-width:960px){
        width: calc(100vw - 40px);
        left :-15px;
    }
`
const FeeRuleTitle = styled.div`
    font-size: 14px;
    line-height: 1.43;
    color: #fff;
`
const FeeRuleContent = styled(FeeRuleTitle)`
    margin-top: 11px;
`

const AlignCenter = styled(Center)`
    gap:8px;
    position: relative;
    cursor: pointer;
    align-items: flex-start;
    &:hover ${FeeRule}{
        display: block;
    }
`
const MintFeeContainer = styled.div`
    height: 20px;
    display: flex;
    align-items: center;
    gap:10px;
`
const TipIcon = styled.img`
    width:16px;
    height:16px;
    cursor: pointer;
    
`