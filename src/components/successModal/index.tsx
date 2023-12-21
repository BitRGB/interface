import { ICON_SUCCESS_OK, MODAL_CLOSE } from "assets";
import { ButtonBase } from "components/buttons";
import { createPortal } from "react-dom";
import styled from "styled-components";


export default () => {
    return (
        createPortal(<>
            <Mask></Mask>
            <Content>
                <Header>
                    <ModalClose src={MODAL_CLOSE} />
                </Header>
                <Container>
                    <Success src={ICON_SUCCESS_OK} />
                    <Title>
                        Transaction sent successfully
                    </Title>
                    <SubTitle>
                        Transaction sent successfully, you can go to the block explorer to check the progress of the transaction
                    </SubTitle>
                    <Button>
                        Check Progress
                    </Button>
                </Container>
            </Content>
        </>, document.body)
    )
}

const Mask = styled.div`
    position: fixed;
    top:0;
    bottom: 0;
    right:0;
    left: 0;
    z-index: 998;
    -webkit-filter: blur(10px);
    filter: blur(10px);
    background-color: rgba(0,0,0,0.8);
`
const Content = styled.div`
    position: fixed;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
    border-radius: 8px;
    background-color: #141c25;
    z-index: 999;
    width:350px;
    box-sizing: border-box;
    padding:20px;
`
const Header = styled.div`
    display: flex;
    justify-content: flex-end;
    
`
const ModalClose = styled.img`
    cursor: pointer;
    width:16px;
    height: 16px;
`

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const Success = styled.img`
    margin-top: 5px;
    width:50px;
    height:50px;
`
const Title = styled.div`
    width: 177px;
    margin-top: 20px;
  font-size: 20px;  
  line-height: 1.2;
  color:#fff;
  text-align: center;
`
const SubTitle = styled.div`
    width: 282px;
    line-height: 1.57;
    margin-top: 15px;
  font-size: 14px;
  color:#999;
  text-align: center;
`
const Button = styled(ButtonBase)`
    margin-top: 21px;
    width:210px;
    height:50px;
    border-radius: 5px;
    background-color: #115dfd;

`