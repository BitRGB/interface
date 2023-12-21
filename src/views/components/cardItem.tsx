import styled from "styled-components";

interface ICardItem {
    img: string
    title: string
    desc: string
    className?: string
    id: number
    link:string
    content:string
}
export default ({ img, title, desc, id, className,link,content }: ICardItem) => {
    const handleClick = ()=>{
        window.open(link,"_blank")
    }
    return (
        <Wrapper title={content} data-wow-delay={`${0.3 * id}s`} className={className} onClick={handleClick}>
            <Image src={img} />
            <Right>
                <Title>{title}</Title>
                <Desc>{desc}</Desc>
            </Right>
        </Wrapper>
    )
}

const Wrapper = styled.li`
    width: 308px;
    height: 140px;
    padding: 15px 16px 17px;
    border-radius: 16px;
    box-sizing: border-box;
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    border: solid 1px #3c4d68;
    background-color: rgba(13, 18, 26, 0.4);
    display: flex;
    cursor: pointer;
    &:hover{
        border: solid 1px #105DFF;
    }
`
const Image = styled.img`
    width:68px;
    height: 108px;
    margin-right: 12px;
    object-fit: contain;
    border-radius: 12px;
`
const Right = styled.div`

`
const Title = styled.div`
     font-size: 12px;
    line-height: 1.33;
    color: rgba(255,255,255,0.6);
`
const Desc = styled.div`
    font-family: AvenirNext;
    font-size: 18px;
    font-weight: 600;
    margin-top: 20px;
    line-height: 1.33;
    color: #fff;
    text-overflow: ellipsis;
`