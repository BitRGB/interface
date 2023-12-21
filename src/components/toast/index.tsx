
import ReactDOM from 'react-dom/client';
import { ToastComponent } from './toast';

function ToastMessage(text: string, type: "success" | "error", interval = 5000) {
    const div = document.createElement("div")
    document.body.appendChild(div)
    const root = ReactDOM.createRoot(div);
    const handleClose = () => {
        if (div) {
            document.body.removeChild(div)
        }
    }
    root.render(<ToastComponent text={text} type={type} interValue={interval} visible={true} onClose={handleClose} />)
}


export const Toast = {
    success(msg: string, interval?: number) {
        ToastMessage(msg, "success", interval)
    },
    error(msg: string, interval?: number) {
        ToastMessage(msg, "error", interval)
    }
}