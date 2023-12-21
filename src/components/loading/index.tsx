import { ICON_LOADING } from "assets";
import { createPortal } from "react-dom";
import styled, { keyframes } from "styled-components";

const animation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`
export const LoadingIcon = styled.img`
    width:16px;
    height:16px;
    animation: ${animation} 1s linear infinite;
`
export const SubmitLoading = () => {
    return (
        <LoadingIcon src={ICON_LOADING} />
    )
}
export const GlobalLoading = () => {
    return createPortal(<>
        <Mask />
        <Main>
            <Loading src={ICON_LOADING} />
            <Text>Loading</Text>
            <Label>Please be patient</Label>
        </Main>
    </>, document.body)
}

const Mask = styled.div`
    position: fixed;
    top:0;
    bottom: 0;
    right:0;
    left: 0;
    z-index: 99998;
    -webkit-filter: blur(10px);
    filter: blur(10px);
    background-color: rgba(0,0,0,0.8);
`
const Main = styled.div`
    position: fixed;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
    border-radius: 8px;
    background-color: #141c25;
    z-index: 99999;
    width:240px;
    box-sizing: border-box;
    padding:40px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const Loading = styled(LoadingIcon)`
    width:40px;
    height:40px;
`
const Text = styled.div`
    margin-top: 20px;
    font-size: 16px;
    color:#fff;
`
const Label = styled.div`
    margin-top: 15px;
    font-size: 14px;
    color:rgba(255,255,255,0.5);
`