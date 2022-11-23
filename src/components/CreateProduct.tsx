import React, {useEffect, useState} from "react";
import {IProduct} from "../models";
import axios from "axios";
import {ErrorMessage} from "./ErrorMessage";

const productData: IProduct = {
    title: 'test product',
    price: 13.5,
    description: 'lorem ipsum set',
    image: 'https://i.pravatar.cc/',
    category: 'electronic',
    rating: {
        rate: 2, count: 2,
    },
}

interface CreateProductProps {
    onCreate: (product: IProduct) => void
}

export function CreateProduct({onCreate}: CreateProductProps) {
    const [value, setValue] = useState('');
    const [description, setDescription] = useState('');
    const [error, setError] = useState('');


    useEffect(() => {
        if (value.trim().length === 0) {
            setError('please enter valid title')
        } else {
            setError('')
        }
    }, [value])

    const onSubmitHandler = async (event: React.FormEvent) => {
        event.preventDefault();
        productData.title = value


        const response = await axios.post<IProduct>('https://fakestoreapi.com/products/', productData)

        onCreate(response.data)
    }

    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
    }
    const changeHandlerDescription = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDescription(event.target.value)
        productData.description = description
    }


    return (<>
        <form className={'flex-col p-8'}
            onSubmit={onSubmitHandler}>
            <input type="text"
                   className={"border py-2 px-4 mt-2 mb-2"}
                   placeholder={'Enter product name....'}
                   value={value}
                   onChange={(event) => changeHandler(event)}
            />
            <input type="text"
                   className={"border py-2 px-4 mt-2 mb-2"}
                   placeholder={'Enter product description'}
                   value={description}
                   onChange={(event) => changeHandlerDescription(event)}
            />
            {error && <ErrorMessage error={error}/>}
            <button
                className={"flex flex-nowrap border rounded-full m-auto py-2 px-4 mt-4  hover:bg-emerald-600"}
            >Purchase
            </button>
        </form>
    </>)
}