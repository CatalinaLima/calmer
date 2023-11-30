import React from 'react';

const CartItem = ({ p, onCancel, total }) => {
    const handleCancel = () => {
        onCancel ();
    }

    const itemTotal = p.price * p.quantity;

    return (
    <div className="CartItem">
        <h4>{p.name}</h4>
        <img src={p.img}></img>
        <p>Cantidad: {p.quantity}</p>
        <p>Precio por unidad: ${p.price}</p>
        <p>Total: ${itemTotal}</p>
        <button onClick={handleCancel}>Cancelar</button>
    </div>
    );
};

export default CartItem;

