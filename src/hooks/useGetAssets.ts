import { useEffect } from 'react'
import { useApplicationState } from 'store/application'
import { useGetMyAssets } from 'store/assets'

export const useGetAssetsList = () => {
    const { pubkey } = useApplicationState()
    const onGetMyAssets = useGetMyAssets()
    useEffect(() => {
        onGetMyAssets(1, 1000, pubkey)
    }, [pubkey])
}