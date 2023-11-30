import React from 'react';
import "./CartItem.css"

const CartItem = ({ p, onCancel, total }) => {
    const handleCancel = () => {
        onCancel ();
    }

    const itemTotal = p.price * p.quantity;

    return (
    <div className="CartItem2">
        <div className="Books">
            <img className="ItemImg3" src={p.img}></img>
        </div>
        <div className="Books">
            <h4>{p.name}</h4>
            <p>Cantidad: {p.quantity}</p>
            <p>Precio por unidad: ${p.price}</p>
        </div>
        <div className="Info">
            <p>${itemTotal}</p>
            <button className='buttonCart' onClick={handleCancel}>Eliminar</button>
        </div>
    </div>
    );
};

export default CartItem;

