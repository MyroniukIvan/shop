import React, {useContext} from 'react';
import {useProduct} from "../hooks/useProduct";
import {ModalContext} from "../context/modalContext";
import {IProduct} from "../models";
import {ErrorMessage} from "../components/ErrorMessage";
import {CreateProduct} from "../components/CreateProduct";
import { Modal } from '../components/Modal';
import {Loader} from "../components/Loader";
import Products from "../components/Products";

const ProductPage = () => {
    const {products, loading, error, addProduct} = useProduct();
    const {modal, open, close} = useContext(ModalContext)

    const createHandler = (product: IProduct) => {
        close()
        addProduct(product)
    }

    return (
            <div className="container mx-auto max-w-2xl pt-5">
                { loading && <Loader /> }
                { error && <ErrorMessage error={error} /> }
                { products.map(product => <Products product={product} key={product.id} />) }

                {modal && <Modal title="Create new product" onClose={close}>
                    <CreateProduct onCreate={createHandler} />
                </Modal>}

                <button
                    className="fixed bottom-5 right-5 rounded-full bg-emerald-800 backdrop-blur-2xl text-white text-2xl px-4 py-2"
                    onClick={open}
                >+</button>
            </div>
    );
};

export default ProductPage;