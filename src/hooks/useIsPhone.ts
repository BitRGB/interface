import { useMediaQuery } from 'usehooks-ts'

export const useIsPhone = () => {
    const matches = useMediaQuery('(max-width: 960px)')
    return matches
}