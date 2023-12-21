import { ICON_NO_DATA } from "assets";
import styled from "styled-components";

export default () => {
    return (
        <Wrapper>
            <Icon src={ICON_NO_DATA} />
            <Nodata>No Data</Nodata>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width:100%;
    box-sizing: border-box;
    height:348px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap:20px;
`
const Icon = styled.img`
    width:40px;
    height:40px;
`
const Nodata = styled.span`
    font-size: 16px;
    color: #85878b;
`