import {FC} from "react";


interface IErrorMessage {
    error?: string
}

export const ErrorMessage:FC<IErrorMessage> = ({error}) => {
    return (
        <>
            <p className={'text-center text-red-900 font-extrabold'}>{error}</p>
        </>)
}
