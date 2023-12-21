import { useCallback } from 'react'
import { useToggleWalletModal } from 'store/application'

export const useConnectWallet = () => {
    const onConnectWallet = useToggleWalletModal()
    const handleConnectWallet = useCallback(() => {
        onConnectWallet(true)
    }, [])
    return handleConnectWallet
}