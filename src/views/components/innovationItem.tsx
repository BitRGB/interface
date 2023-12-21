import styled from "styled-components";

export default ({ title, sub, index }: { title: string, sub: string, index: number }) => {
    return (
        <Wrapper>
            <Left>
                <VideoWrapper />
                <Video muted={true} className={index==0?"":"normal"} src={`${process.env.PUBLIC_URL}/video/video5.mp4`} autoPlay={true} loop={true} />
                <Video1 muted={true} className={index==1?"normal":""} src={`${process.env.PUBLIC_URL}/video/video4.mp4`} autoPlay={true} loop={true} />
            </Left>
            <Right>
                <Title>
                    {title}
                </Title>
                <SubTitle>
                    {sub}
                </SubTitle>
            </Right>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
`

const Left = styled.div`
    position: relative;
    width: 640px;
    height: 346px;
    display: flex;
    align-items: center;
    transition: all 0.3s linear;
`
const VideoWrapper = styled.div`
    width:100%;
    height: 301px;
    border-radius: 20px;
  background-color: #1c2635;
  cursor: pointer;
`
const Right = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 40px;
`

const Title = styled.div`
      width: 586px;
  height: 114px;
  font-family: AvenirNext;
  font-size: 42px;
  font-weight: 600;
  color: #fff;
`
const SubTitle = styled.div`
    font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  color:rgba(255,255,255,0.6);
  margin-top: 14px;
  width: 485px;
  
`
const Video = styled.video`
  height: 346px;
  border-radius: 40px;
  background-color: #0d121a;
  position: absolute;
  backface-visibility: hidden;
  transition: all 0.8s ease;
  transform: rotateY(0deg);
  &.normal{
    transform: rotateY(-180deg);
  }
`
const Video1 = styled(Video)`
    transform: rotateY(-180deg);
    &.normal{
    transform: rotateY(0deg);
  }
`