import styled from "styled-components";


export const TokenIcon = ({ src }: { src: string }) => {
    return (
        <TokenImage src={src} />
    )
}

const TokenImage = styled.img`
    width:20px;
    height:20px;
    border-radius: 50%;
`

export const YellowCopy = styled.img`
    width: 14px;
    height: 14px;
    cursor: pointer;
`

export const WhiteCopy = styled(YellowCopy)`
    
`
export const AssetIcon = styled.img`
    width:40px;
    height:40px;
    
`