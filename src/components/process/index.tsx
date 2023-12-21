import styled, { keyframes } from "styled-components";

export default ({ width }: { width: number | string }) => {
    return (
        <Wrapper>
            <Inner width={width} />
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width:100%;
    border-radius: 5px;
    background-color: rgba(43,181,75,0.2);
    position: relative;
    height: 3px;
`

const anmation = (width: number | string) => keyframes`
    0%{
        width:0px;
    }
    100%{
        width:${width}%;
    }
`
const Inner = styled.div<{ width: number | string }>`
    border-radius: 5px;
    position: absolute;
    top:0;
    height: 3px;
    left:0;
    animation:${({ width }) => anmation(width)} 0.8s ease-in-out forwards;
    background-color: #26c040;
`