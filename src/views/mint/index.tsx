import styled from "styled-components";
import { Round } from './round'
import Record from './record'
import { GlobalLoading } from "components";
import { useGetRoundInfo, useIsInWhiteList, useIsMintRound2, useMintState, useNewUserMintInfo } from "store/mint/hooks";
import { useEffect } from "react";
import { useApplicationState } from "store/application";
import { useGetAssetsList, useGetBtcPrice } from "hooks";
import NewRound from './newRound'
import { useGetMyAssets } from "store/assets";

export default () => {
    const { whiteLoading, loading, recordLoading, round1, round2 } = useMintState()
    const onGetRoundInfo = useGetRoundInfo()
    const onGetRoundWhite = useIsInWhiteList()
    const { address } = useApplicationState()
    const onGetIsRound2Mint = useNewUserMintInfo()
    useGetBtcPrice()
    useGetAssetsList()
    /** 获取资产信息 */
    useEffect(() => {
        onGetRoundInfo(1)
    }, [])
 
    /** 获取白名单信息 */
    /** 第二轮是否已经mint */
    useEffect(() => {
        if (address) {
            onGetRoundWhite(address)
            onGetIsRound2Mint(address)
        }
    }, [address])
    return (
        <>
            <Wrapper>
                <NewRound />
                <Record />
            </Wrapper>
            {(whiteLoading || loading || recordLoading) && <GlobalLoading />}
        </>
    )
}

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 20px;
`
const Boxsize = styled.div`
    height: 30px;
`