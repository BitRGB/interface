import { ICON_CROSS } from "assets";
import { ReactNode } from "react";
import styled from "styled-components";


export default ({ children }: { children?: ReactNode }) => {
    return (
        <Wrapper>
            <Header>
                <Icon src={ICON_CROSS} />
                <Line />
                <RightIcon src={ICON_CROSS} />
            </Header>
            <Flex>
                <VLine />
                <Main>
                    {
                        children
                    }
                </Main>
                <VLine />
            </Flex>
            <Header>
                <Icon src={ICON_CROSS} />
                <Line />
                <RightIcon src={ICON_CROSS} />
            </Header>
        </Wrapper>
    )
}

const Wrapper = styled.div`
   
`
const Header = styled.header`
    display: flex;
    align-items: center;
    @media screen and (max-width:960px){
        display: none;
    }
`
const Icon = styled.img`
    width:10px;
    height:10px;
    margin-left:-5px;
`
const RightIcon = styled(Icon)`
    margin-left: auto;
    margin-right: -5px;
`
const Line = styled.div`
    width:100%;
    background-color: rgba(255, 255, 255, 0.08);
    height:1px;
`
const VLine = styled.div`
    width:1px;
    background-color: rgba(255, 255, 255, 0.08);
    @media screen and (max-width:960px){
        display: none;
    }
`
const Flex = styled.div`
    display: flex;
`
const Main = styled.main`
    flex:1;
    box-sizing: border-box;
    padding:25px 30px;
    @media screen and (max-width:960px){
        padding:25px 0;
    }
`