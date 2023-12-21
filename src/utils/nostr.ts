import { getNowSecond } from './lib'
import { nip19 } from 'nostr-tools'

const getNostr = (name: string) => {
    switch (name) {
        case "okx":
            return (window as any).okxwallet.nostr;
        case "tokenpocket":
            return (window as any).tokenpocket.nostr;
        default:
            return (window as any).nostr;
    }
}

export const handleEvent = async (content: string) => {
    const event = {
        created_at: getNowSecond(),
        kind: 1,
        content,
        tags: [],
    };
    const name = window.localStorage.getItem("wallet_name")||"alby"
    const nostr = getNostr(name)
    const signedEvent = await nostr.signEvent(event);
    return {
        event: JSON.stringify(signedEvent)
    }
}

function isMobile() {
    return ('ontouchstart' in document.documentElement);
}

export const getNostrPubkey = async (name: string) => {
    if (isMobile()) {
        return await (window as any).nostr.getPublicKey();
    }
    const nostr = getNostr(name)
    return await nostr.getPublicKey();
}

export const convertPubkeyToAddress = (key: string) => {
    if (!key) {
        return ""
    }
    return nip19.npubEncode(key)
}

export const validateNostrAddress = (address: string) => {
    try {
        nip19.decode(address)
        return true
    } catch (error) {
        return false
    }
}