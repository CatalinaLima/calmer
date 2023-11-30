import './Cart.css'
import {useContext} from 'react'
import { CartContext } from '../../context/CartContext'
import CartItem from '../CartItem/CartItem'
import { Link } from 'react-router-dom'

const Cart = () => {
    const { cart, clearCart, totalQuantity, total, removeItem} = useContext (CartContext)

    const handleCancel = (itemId) => {
        removeItem(itemId, 1); 
    };

    if (totalQuantity === 0) {
        return (
            <div>
                <h1>No hay items en el carrito</h1>
                <Link to = '/category/books' className='Option'> Comprar </Link>
            </div>
        )
    }

    return(
        <div className='CartPrincipal'>
        <div className='Cart'>
            {cart.map (p => <CartItem key= {p.id} p={p} total={total} onCancel= { () => handleCancel(p.id) } /> ) }
        </div>
        <div className='Checkout2'>
            <h3>Total: $ {total} </h3>
            <button onClick = { () => clearCart ()} className='Button'>Limpiar carrito</button>
            <Link to = '/checkout' className='OptionDetail2'> Checkout </Link>
        </div>
        </div>
    )
} 

export default Cart;

