import React, {useState} from 'react';
import {IProduct} from "../models";


interface ProductProps {
    product: IProduct
}


const Products = ({product}: ProductProps) => {

    const [details, setDetails] = useState(false);

    const btnClass = details ? 'bg-yellow-200' : 'bg-emerald-600';
    const btnClasses = ['m-4 px-4 py-2 border rounded-full', btnClass];


    return (<div className={'border flex items-center flex-col text-center px-4 py-2 mb-2 '}>
        <h1 className={'font-bold'}>{product.title}</h1>
        <img className={'w-1/6 h-1/3'} src={product.image} alt=""/>
        <div className={'italic text-emerald-900 font-bold pt-1'}> {product.price}</div>


        <button
            className={btnClasses.join(' ')}
            onClick={() => {
                setDetails(prevState => !prevState);
            }}
        >{details ? "Hide Description" : 'Show Description' }
        </button>
        {details && <p> {product.description} <p> {product?.rating?.rate}</p></p>}
    </div>);
};

export default Products;