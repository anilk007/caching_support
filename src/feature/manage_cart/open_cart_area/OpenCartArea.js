import React, { useState } from "react";

import ModalOverlay from './../../../common/ui/modal/ModalOverlay'

const OpenCartArea = (props) => {

    const [qty, setQty] = useState(1);
    const [price, setPrice] = useState(0);

    const reduceQty = () => {
        setQty((prevStateQty) => --prevStateQty);

    }

    const incrQty = () => {
        setQty((prevStateQty) => ++prevStateQty);
    }

    const handleQtyChange = () => {

    }

    const handleSaveCart = () => {

    }

    return (<>


        <div>
            Open Cart Area

        </div>

        <ModalOverlay>{props.courseData.id}
            {props.courseData.slug}


            <button className="btn btn-primary text-start"
                type="button" onClick={() => reduceQty()}>
                -
            </button>
            <button className="btn btn-primary text-start"
                type="button" onClick={() => incrQty()}>
                +
            </button>

            <form onSubmit={handleSaveCart}  >
                <div className="form-group mt-2">
                    <label className="form-label" htmlFor="title">Quantity
                        <span className="p-1 text-danger">*</span>
                    </label>
                    <input className="form-control" type="text" name="qty"
                        value={qty} placeholder="Enter Quantity"
                        onChange={handleQtyChange} />
                </div>

                <div className="form-group mt-2">
                    <label className="form-label" htmlFor="title">price
                    </label>

                    <input className="form-control" type="text" name="price"
                        value={price}
                    />

                </div>

                <div className="form-group mt-4 float-end">
                    <button className="btn btn-primary" type="submit"

                    >Submit</button>
                </div>

            </form>


        </ModalOverlay>




    </>);
}


export default OpenCartArea;