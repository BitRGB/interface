import { Toast } from 'components'
import { useCopyToClipboard } from 'usehooks-ts'

export const useCopy = () => {
    const [_, copyFunc] = useCopyToClipboard()
    return async (text:string)=>{
        await copyFunc(text)
        Toast.success("Copid Success")
    }
}