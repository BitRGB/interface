
import { ConnectButton, ConnectedButton } from "components/select/connectButton";
import { useApplicationState } from "store/application";
import styled from "styled-components";
import { Logo } from '../logo'
import { Menu } from '../menus'

export const Header = () => {
    const { address } = useApplicationState()
    return (
        <HeaderWrapper>
            <HeaderFlex>
                <Logo />
            </HeaderFlex>
            <Menu />
            <Flex>
                <Connect>
                    {!address ? <ConnectButton /> : <ConnectedButton />}
                </Connect>
            </Flex>
        </HeaderWrapper>
    )
}

const HeaderWrapper = styled.header`
    width:100%;
    height:84px;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    padding: 0 40px;
`
const HeaderFlex = styled.div`
    display: flex;
    align-items: center;
    gap:100px;
`

const Flex = styled.div`
    display: flex;
    align-items: center;
    gap:15px;
`

const Language = styled.div`
    width:120px;
    height:44px;
`
const Connect = styled.div`
    width:150px;
    height: 44px;
`