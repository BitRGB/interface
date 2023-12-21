import styled from "styled-components";
import { BG_STEP1, BG_STEP2, BG_STEP3, BG_STEP4, ICON_ARROW, ICON_BRIDGE, ICON_EXPLORE, ICON_GETSAT, ICON_WALLET, PHONE_STEP1, PHONE_STEP2 } from "../../assets";
import { BRIDGE_ASSET_LINK, CREATE_WALLET_LINK, EXPLOR_LINK, GET_SAT_LINK } from "../../config";


export default () => {
    const handleLink = (url:string)=>{
        window.open(url,"_blank")
    }
    return (
        <Wrapper>
            <Item data-wow-delay="0s" className="wow animate__slideInRight" onClick={()=>handleLink(CREATE_WALLET_LINK)}>
                <Step>Step 1. </Step>
                <Row>
                    <Title>
                    Join BitRGB Hub
                    </Title>
                    <Arrow src={ICON_ARROW} />
                </Row>

                <Icon src={ICON_WALLET} />
            </Item>
            <Item2 data-wow-delay="0s" className="wow animate__slideInRight" onClick={()=>handleLink(GET_SAT_LINK)}>
                <Step>Step 2. </Step>
                <BoxSize />
                <Row>
                    <Title>Issue RGB20/ RGB21</Title>
                    <Arrow src={ICON_ARROW} style={{ bottom: "2px" }} />
                </Row>
                <Icon src={ICON_GETSAT} />
            </Item2>
            <Item data-wow-delay="0s" className="wow animate__slideInRight" onClick={()=>handleLink(BRIDGE_ASSET_LINK)}>
                <Step>Step 3. </Step>
                <BoxSize />
                <Row>
                    <Title>Trade RGB20/ RGB21</Title>
                    <Arrow src={ICON_ARROW} style={{ bottom: "2px" }} />
                </Row>
                <Icon src={ICON_BRIDGE} />
            </Item>
            <Item data-wow-delay="0s" className="wow animate__slideInRight" onClick={()=>handleLink(EXPLOR_LINK)}>
                <Step>Step 4. </Step>
                <Row>
                    <Title>Explore the BitRGB Ecosystem</Title>
                    <Arrow src={ICON_ARROW} />
                </Row>
                <Icon src={ICON_EXPLORE} />
            </Item>
        </Wrapper>
    )
}

const Wrapper = styled.ul`
    list-style: none;
    margin: 0;
    display: flex;
    flex-direction: column;
`
const Item = styled.li`
    background-image: url(${PHONE_STEP1});
    background-size: 100% 100%;
    position: relative;
    min-height: 178px;
    box-sizing: border-box;
    padding:0 16px;
    margin-bottom: 16px;
    border-radius: 16px;
    &:nth-last-child(1){
        margin-bottom: 0;
    }
`
const Item2 = styled(Item)`
    background-image: url(${PHONE_STEP2});
    min-height: 185px;
`
const Icon = styled.img`
    position: absolute;
    width: 60px;
    height: 60px;
    top:24px;
    right:16px;
`
const Step = styled.div`
    margin-top: 42px;
    font-size: 14px;
  font-weight: 500;
  line-height: 1.71;
  color: #4165a4;
`
const Row = styled.div`
    display: flex;
    position: absolute;
    justify-content: space-between;
    left:12px;
    right:12px;
    bottom:24px;
`
const Title = styled.div`
    margin-top: 12px;
    font-family: AvenirNext;
  font-size: 24px;
  font-weight: 600;
  line-height: 1.33;
  color: #fff;
`
const Arrow = styled.img`
    position: absolute;
    width: 28px;
  height: 28px;
  bottom: 5px;
  right: 0;
`
const BoxSize = styled.div`
    height: 30px;
`