import { useEffect } from "react"
import { useBtcPrice } from "store/application"

export const useGetBtcPrice = () => {
    const onGetBtcPrice = useBtcPrice()
    useEffect(() => {
        onGetBtcPrice()
    }, [])
}