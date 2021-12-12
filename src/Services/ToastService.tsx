import { toast } from 'react-toastify';

export function ShowToast(message:string):void{
    toast(message, {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        })
}