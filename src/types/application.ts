export interface IApplicationState {
    language: string
    pubkey: string
    address: string
    btcPrice: string
    showWalletModal: boolean
    walletName: string
    installWallet: {
        name: string,
        isInstall: boolean
    }
}