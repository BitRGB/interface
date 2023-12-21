import styled from "styled-components";
import { FC, useEffect, useState } from 'react'
import { RefreshButton } from "components/Icons";
import {format} from 'timeago.js'

interface IProps {
    onRefrshClick?: () => void
    total: number
    time: number
}
export const Refresh: FC<IProps> = ({ onRefrshClick, total, time }) => {
    const [tick, setTick] = useState(0)
    let interval = 0
    useEffect(() => {
        interval = window.setInterval(() => {
            setTick(tick + 1)
        }, 1000)
        return () => {
            window.clearInterval(interval)
        }
    }, [tick])
    return (
        <Wrapper>
            <RefreshButton onClick={onRefrshClick}></RefreshButton>
            <Flex>
                <Results>{total} Results</Results>
                <Time key={tick}>{format(time)}</Time>
            </Flex>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    gap:10px;
`
const Flex = styled.div`
    display: flex;
    flex-direction: column;
    gap:8px;
`
const Results = styled.span`
    font-size: 14px;
    color: #dae1e5;
`

const Time = styled(Results)`
    font-size: 12px;
    color:#999;
`
