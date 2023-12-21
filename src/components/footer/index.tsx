import styled from "styled-components";
import { ICON_CROSS, ICON_DISCORD, ICON_DOC_BOTTOM, ICON_GIT, ICON_TG, ICON_TW } from "assets";
import { Logo } from "components/logo";
import { DISCORD_LINK, DOC_LINK, GIT_HUB, TG_LINK, TWRITTER_LINK } from "config";
import { useIsPhone } from "hooks";


export const Footer = () => {
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
                    <Row1>
                        <Logo />
                    </Row1>
                    <Row2>
                        <CopyRight>© 2023. BitRGB. All rights reserved</CopyRight>
                        <IconsGroup>
                            <Link href={TWRITTER_LINK}>
                                <IconButton>
                                    <Image src={ICON_TW} />
                                </IconButton>
                            </Link>
                            <Link href={TG_LINK}>
                                <IconButton>
                                    <Image src={ICON_TG} />
                                </IconButton>
                            </Link>
                            <Link href={GIT_HUB}>
                                <IconButton>
                                    <Image src={ICON_GIT} />
                                </IconButton>
                            </Link>
                            <Link href={DISCORD_LINK}>
                                <IconButton>
                                    <Image src={ICON_DISCORD} />
                                </IconButton>
                            </Link>
                            <Link href={DOC_LINK}>
                                <IconButton>
                                    <Image src={ICON_DOC_BOTTOM} />
                                </IconButton>
                            </Link>
                        </IconsGroup>
                    </Row2>
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

const Wrapper = styled.footer`
    margin-top: 35px;
`
const Header = styled.header`
    display: flex;
    align-items: center;
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

`
const Flex = styled.div`
    display: flex;
`
const Main = styled.div`
    flex:1;
`
const Row = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
`
const Row1 = styled(Row)`
    height: 100px;
    padding:0 30px;
    border-bottom: solid 1px #252a31;
    box-sizing: border-box;
    @media screen and (max-width:960px){
        padding:0 15px;
        
    }
`
const Row2 = styled(Row)`
    height: 78px;
    padding:0 30px;
    @media screen and (max-width:960px){
        padding:20px 15px;
        flex-direction: column;
        gap:15px;
        height: auto;
    }

`
const CopyRight = styled.div`
    font-size: 12px;
    font-weight: 600;
    line-height: 1.33;
    color:rgba(255,255,255,0.5);
    font-family: Source Code Pro;
    @media screen and (max-width:960px){
        order:2;
        
    }
`

const IconsGroup = styled.div`
    display: flex;
    align-items: center;
    gap:32px;
    @media screen and (max-width:960px){
        order:1;
    }
`
const IconButton = styled.div`
    width:40px;
    height:40px;
    cursor: pointer;
    background-color: #1c2534;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Image = styled.img`
    width:24px;
    height:24px;
`
const Link = styled.a.attrs({
    target: "_blank"
})`
    display:inline-block;
`