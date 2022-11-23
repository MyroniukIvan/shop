import React, {useContext} from 'react'
import {ModalContext} from "../context/modalContext";
import {Modal} from "../components/Modal";
import {CreateProduct} from "../components/CreateProduct";
import {IProduct} from "../models";
import {useProduct} from "../hooks/useProduct";
import {Loader} from "../components/Loader";
import {ErrorMessage} from "../components/ErrorMessage";

function AboutPage() {
    const {modal, open, close} = useContext(ModalContext)
    const {products, loading, error, addProduct} = useProduct();

    const createHandler = (product: IProduct) => {
        close()
        addProduct(product)
    }

    return (

        <div className="container mx-auto max-w-2xl pt-5">
            <div className={'border flex items-center flex-col text-center px-4 py-2 mb-2 '}>
                {loading && <Loader/>}
                {error && <ErrorMessage error={error}/>}
                {modal && <Modal title="Create new product" onClose={close}>
                    <CreateProduct onCreate={createHandler}/>
                </Modal>}
                <button
                    className="fixed bottom-5 right-5 rounded-full bg-red-700 text-white text-2xl px-4 py-2"
                    onClick={open}
                >+
                </button>
            </div>
        </div>)
}

export default AboutPage