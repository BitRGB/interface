import styled from "styled-components";

export const Title = styled.h1`
    font-size: 36px;
    text-transform: capitalize;
    color:#fff;
    @media screen and (max-width:960px){
        font-size: 24px;
    }
`
export const SubTitle = styled.h2`
    font-size: 14px;
    color:#999;
`

export const Text = styled.span`
    font-size: 16px;
    color:#fff;
`
export const Label = styled.span`
    font-size: 14px;
    color:#86888c;
`
export const RowText = styled.span`
    font-size: 14px;
    color:#feffff;
`
export const StatusText = styled.span`
    font-size: 14px;
    text-transform: capitalize;
    &.success{
        color:#00ae60;
    }
    &.error{
        color: #ec511d;
    }
    &.pending{
        color:#D6A820;
    }
`