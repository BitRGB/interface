import { BTC_SYMBOL } from "config"
import { useMemo } from "react"
import { useAssetsState } from "store/assets"

export const useTokenSelect = () => {
    const { myAssets } = useAssetsState()
    return useMemo(() => {
        if (myAssets.assetList && myAssets.assetList.length > 0) {
            return myAssets.assetList.filter(item => item.assetId != BTC_SYMBOL).map((item, index) => {
                return {
                    id: index + 1,
                    name: item.name,
                    value: item.assetId,
                    symbol: item.symbol,
                    balance: item.balance,
                    assetId: item.assetId,
                    fee: item.fee
                }
            })
        }
        return []
    }, [myAssets])
}

export const useBtcSatsToken = () => {
    const { myAssets } = useAssetsState()
    return useMemo(() => {
        if (myAssets.assetList && myAssets.assetList.length > 0) {
            return myAssets.assetList.find(item => item.assetId == BTC_SYMBOL)
        }
        return undefined
    }, [myAssets])
}
export const useAssets = () => {
    const { myAssets } = useAssetsState()
    return useMemo(() => {
        if (myAssets.assetList && myAssets.assetList.length > 0) {
            return myAssets.assetList
        }
        return []
    }, [myAssets])
}
export const useAllTokenSelect = () => {
    const assets = useTokenSelect()
    return useMemo(() => {
        return [{ id: 0, name: "All Token", value: "" }, ...assets]
    }, [assets])
}
export const useAllTokens = () => {
    const { myAssets } = useAssetsState()
    return useMemo(() => {
        return [{ id: 0, name: "All Token", assetId: "" }, ...myAssets.assetList]
    }, [myAssets])
}