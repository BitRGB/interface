import { ISelectItem, Select } from "components";
import { useTokenSelect } from "hooks";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { formatStats } from "utils";

export interface IProps {
    initToken?: string
    token?: ISelectItem
    onTokenSelect: (item: ISelectItem) => void
}

export const TokenSelect = ({ token, initToken, onTokenSelect }: IProps) => {
    const tokenList = useTokenSelect()
    const [current, setCurrentToken] = useState(token)
    useEffect(() => {
        if (tokenList.length > 0) {
            if (initToken !== undefined) {
                const token = tokenList.find(item => item.assetId == initToken)
                if (token) {
                    onTokenSelect(token)
                    setCurrentToken(token)
                }
            } else {
                if (token) {
                    setCurrentToken(token)
                } else {
                    onTokenSelect(tokenList[0])
                    setCurrentToken(tokenList[0])
                }
            }
        }

    }, [initToken, tokenList, token])
    const handleSelectChange = (item: any) => {
        onTokenSelect(item)
    }
    const handleSelectItemBalance = (item: ISelectItem | undefined) => {
        if (!item) {
            return ""
        }
        return (
            <Balance>Balance: {formatStats(item?.balance)}</Balance>
        )
    }
    return (
        <Select right={handleSelectItemBalance} current={current} list={tokenList} onSelectChange={handleSelectChange} background="#1b2531" />
    )
}

const Balance = styled.span`
    font-size: 14px;
    color:#999;
`