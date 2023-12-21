import { useIsPhone } from "hooks";
import PhoneHeader from "./phoneHeader";
import PcHeader from './pcHeader'


export default () => {
    const isPhone = useIsPhone()
    return (
        <>
            {
                isPhone ? <PhoneHeader /> : <PcHeader />
            }
        </>
    )
}