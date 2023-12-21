import {Line} from '../../components/line'
import styled from 'styled-components'

export const LeftLine = styled(Line)`
    top:84px;
   
`
export const RightLine = styled(LeftLine)`
    right:40px;
    left:auto;
`

export const MiddleLeftLine = styled(Line)`
    top:-5px;
`
export const MiddleRightLine = styled(MiddleLeftLine)`
     right:40px;
    left:auto;
`
export const Tag = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;

`
export const TagLeftIcon = styled.img`
    width: 4px;
    height: 12px;
    margin-right: 8px;
`
export const TagText = styled.div`
    font-size: 12px;
    font-weight: 600;
    line-height: 1.67;
    text-transform: uppercase;
    color:rgba(255,255,255,0.5);
`
export const TagRightIcon = styled.img`
    width: 4px;
    height: 12px;
    margin-left: 8px;
`