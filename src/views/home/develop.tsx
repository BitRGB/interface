import styled from "styled-components";
import { useState } from "react";
import { useMediaQuery } from "usehooks-ts";
import { MiddleLeftLine, MiddleRightLine } from "./line";
import Individuals from "../components/Individuals";
import Developer from "../components/developer";
import PhoneIndividuals from "../components/phoneIndividuals";
import PhoneDevelop from "../components/phoneDevelop";

export default () => {
    const matches = useMediaQuery('(max-width: 960px)')
    const [type, setType] = useState("Individuals")
    const handleChangeType = (type: string) => {
        setType(type)
    }
    return (
        <Wrapper id="Developers">
            <MiddleLeftLine isTop={false}></MiddleLeftLine>
            <Container>
                <Title data-wow-delay="0.3s" className="wow animate__fadeIn">
                    How to get started with BitRGB
                </Title>
                <TabWrapper data-wow-delay="0.5s" className="wow animate__fadeIn">
                    <Tab>
                        <TabMain>
                            <TabItem onClick={() => handleChangeType("Individuals")} className={type == "Individuals" ? "active" : ""}>For Individuals</TabItem>
                            <TabItem onClick={() => handleChangeType("Developers")} className={type == "Developers" ? "active" : ""}>For Developers</TabItem>
                        </TabMain>
                    </Tab>
                </TabWrapper>
                <Content>
                    {
                        type == "Individuals" && <> {matches ? <PhoneIndividuals /> : <Individuals />}</>
                    }
                    {
                        type == "Developers" && <> {matches ? <PhoneDevelop /> : <Developer />}</>
                    }
                </Content>
            </Container>
            <MiddleRightLine isTop={false} />
        </Wrapper>
    )
}

const Wrapper = styled.div`
    height: 929px;
    border-top: 2px solid rgba(255,255,255,0.1);
    position: relative;
    @media screen and (max-width:960px){
        border: none;
        height: auto;
        box-sizing: border-box;
        padding:50px 16px;
        margin-top: 0px;
    }
`
const Container = styled.div`
    max-width: 1280px;
    margin: 0 auto;
    position: relative;
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
    @media screen and (max-width:960px){
      font-size: 24px;
      line-height: 1.33;
      margin-top: 0;
    }
`
const TabWrapper = styled.div`
    margin-top: 40px;
    display: flex;
    justify-content: center;
    @media screen and (max-width:960px){
        margin-top: 24px;
    }
`
const Tab = styled.div`
    width: 326px;
    height: 44px;
    background-image: linear-gradient(to top, #3d4147, #105dff);
    border-radius: 6px;
    padding:1px;
    box-sizing: border-box;
    overflow: hidden;
    @media screen and (max-width:960px){
      width:100%;
    }
`
const TabMain = styled.div`
    background-color: #0e1219;
    width: 100%;
    border-radius: 6px;
    height: 100%;
    display: flex;
     align-items: center;
`
const TabItem = styled.div`
    cursor: pointer;
    user-select: none;
    flex:1;
    display:flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    line-height: 1.33;
    color: #fff;
    height: 100%;
    &.active{
        background-color: #252134;
        border-radius: 6px;
    }
`
const Content = styled.div`
    margin-top: 40px;
    @media screen and (max-width:960px){
        margin-top: 24px;
    }
`