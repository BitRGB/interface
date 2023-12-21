import styled from "styled-components";
import { BG_STEP1, BG_STEP2, BG_STEP3, BG_STEP4, ICON_ARROW, ICON_EXPLORE, ICON_SETP_MED, ICON_STEP_DOC, ICON_STEP_GITHUB } from "../../assets";
import { COLLABORATE_LINK, EXPLOR_LINK, JOIN_CHAT_LINK, READ_DOC_LINK } from "../../config";

export default () => {
    const handleLink = (url: string) => {
        window.open(url, "_blank")
    }
    return (
        <Wrapper>
            <Step1 data-wow-delay="0s" className="wow animate__slideInUp" onClick={() => handleLink(READ_DOC_LINK)}>
                <Icon src={ICON_STEP_DOC} />
                <TextWrapper>
                    <Step>Step 1.  </Step>
                    <Flex>
                        <Text1>Read the Developer Docs</Text1>
                        <Arrow src={ICON_ARROW} />
                    </Flex>
                </TextWrapper>
            </Step1>
            <Right>
                <Row>
                    <Step2 data-wow-delay="0.2s" className="wow animate__slideInUp" onClick={() => handleLink(COLLABORATE_LINK)}>
                        <Step2Row1>
                            <Step2Column>
                                <Step>Step 2. </Step>
                            </Step2Column>
                            <Icon src={ICON_STEP_GITHUB} />
                        </Step2Row1>
                        <FlexEndBet style={{ marginTop: "-25px" }}>
                            <Step4Text>Collaborate on BitRGB GitHub</Step4Text>
                            <Arrow4 src={ICON_ARROW} />
                        </FlexEndBet>
                    </Step2>
                    <Step3 data-wow-delay="0.4s" className="wow animate__slideInUp" onClick={() => handleLink(EXPLOR_LINK)}>
                        <Icon4 src={ICON_EXPLORE} />
                        <Step3Text>Step 4. </Step3Text>
                        <FlexEndBet >
                            <Step4Text style={{ width: "329px" }}>Explore the BitRGB Ecosystem</Step4Text>
                            <Arrow4 src={ICON_ARROW} />
                        </FlexEndBet>
                    </Step3>
                </Row>
                <Row2 data-wow-delay="0.6s" className="wow animate__slideInUp" onClick={() => handleLink(JOIN_CHAT_LINK)}>
                    <Step4Row1>
                        <span></span>
                        <Icon src={ICON_SETP_MED}></Icon>
                    </Step4Row1>
                    <Step4Row2>
                        <Step>Step 3. </Step>
                        <FlexCenterBet>
                            <Step4Text>Join the Developer Chat</Step4Text>
                            <Arrow4 src={ICON_ARROW} />
                        </FlexCenterBet>
                    </Step4Row2>
                </Row2>
            </Right>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width:100%;
    display: flex;
`
const Step1 = styled.div`
    width: 368px;
    height: 501px;
    background-image: url(${BG_STEP1});
    background-size: cover;
    padding: 51px 30px 30px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
const Icon = styled.img`
    width: 100px;
    height: 100px;
    object-fit: contain;
`
const CreateWallet = styled.img`
    margin-top: 70px;
    width: 308px;
    height: 82px;
    cursor: pointer;
`
const Step = styled.div`
    font-size: 16px;
    font-weight: 500;
    line-height: 1.5;
    letter-spacing: normal;
    color: #4165a4;
`
const TextWrapper = styled.div`
    margin-top: 48px;
`
const Flex = styled.div`
    margin-top: 8px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    cursor: pointer;
    position: relative;
`
const Text1 = styled.div`
    font-family: AvenirNext;
    font-size: 32px;
    font-weight: 600;
    width:308px;
    color: #fff;
    text-transform: capitalize;
  
`
const Arrow = styled.img`
     width: 28px;
  height: 28px;
  object-fit: contain;
  cursor: pointer;
  position: absolute;
  bottom: 0;
  right: 0;
`
const Arrow4 = styled.img`
      width: 28px;
  height: 28px;
  object-fit: contain;
  cursor: pointer;
  position: absolute;
  bottom:5px;
  right:0;
`
const Right = styled.div`
    margin-left: 24px;
`
const Row = styled.div`
    display: flex;

`
const Row2 = styled.div`
    margin-top: 24px;
    width: 888px;
    height: 260px;
    box-sizing: border-box;
    padding: 30px;
    object-fit: contain;
    background-image: url(${BG_STEP4});
    background-size: cover;
    cursor: pointer;
`
const Step2 = styled.div`
    width: 424px;
    height: 218px;
    cursor: pointer;
    box-sizing: border-box;
    padding: 30px;
    object-fit: contain;
    background-image: url(${BG_STEP2});
    background-size: cover;
    margin-right: 24px;
`
const Step3 = styled.div`
    width: 440px;
    height: 218px;
    box-sizing: border-box;
    cursor: pointer;
    padding: 30px;
    object-fit: contain;
    background-image: url(${BG_STEP3});
    background-size: cover;
    position: relative;
`

const Step4Row1 = styled.div`
    display: flex;
    justify-content: space-between;
`
const Step4Row2 = styled.div`
    margin-top: 7px;
`

const FlexCenterBet = styled.div`
    margin-top: 8px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
`
const Step4Text = styled(Text1)`
    width: auto;
`
const Step2Row1 = styled.div`
    display: flex;
    justify-content: space-between;
`
const Step2Column = styled.div``

const Step3Text = styled(Step)`
    margin-top: 38px;
`
const FlexEndBet = styled(FlexCenterBet)`
    align-items: flex-end;
`
const Icon4 = styled.img`
    width:100px;
    height: 100px;
    position: absolute;
    top:30px;
    right:30px;
`