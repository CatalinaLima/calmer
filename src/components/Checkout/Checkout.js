import "./Checkout.css"
import {useState, useEffect, useContext} from "react"
import { collection, query, where, Timestamp, writeBatch, getDocs, documentId, addDoc } from "firebase/firestore"
import {db} from '../../services/firebase/firebaseConfig'

import CheckoutForm from '../CheckoutForm/CheckoutForm'
import { CartContext } from "../../context/CartContext"

const Checkout = () => {
    const [loading, setLoading] = useState (false)
    const [orderId, setOrderId] = useState ('')

    const {cart, total, clearCart} = useContext (CartContext)

    const createOrder = async ( {name, phone, email} ) => {
        setLoading (true)

        try {
            const objOrder = {
                buyer: {
                    name, phone, email
                },
                items: cart,
                total: total,
                date: Timestamp.fromDate (new Date () )
            }

            const batch = writeBatch (db)

            const outOfStock = []

            const ids = cart.map (prod => prod.id )

            const productsRef = collection (db, 'products')

            const productsAddedFromFirestore = await getDocs (query(productsRef, where(documentId(), 'in', ids )))

            const {docs} = productsAddedFromFirestore

            docs.forEach(doc => {
                const dataDoc = doc.data ()
                const stockDb = dataDoc.stock

                const productAddedToCart = cart.find (prod => prod.id === doc.id)
                const prodQuantity = productAddedToCart?.quantity

                if (stockDb >= prodQuantity ) {
                    batch.update (doc.ref, {stock: stockDb - prodQuantity})
                } else {
                    outOfStock.push ( {id: doc.id, ...dataDoc} )
                }

            } )

            if (outOfStock.length === 0){
                await batch.commit ()

                const orderRef = collection (db, 'orders')

                const orderAdded = await addDoc (orderRef, objOrder)

                setOrderId (orderAdded.id)
                clearCart()
            } else {
                console.error ('Hay productos que estan fuera de stock')
            }

        } catch (error) {
            console.log (error)
        } finally {
            setLoading (false)
        }
    }

    if (loading) {
        return <h1 style={{marginTop: 90}} >Se esta generando su orden...</h1>
    }

    // if (orderId) {
    //     return (
    //         <div>
    //         <h1 style={{marginTop: 200}}>Muchas gracias por su compra!</h1>
    //         <h1 style={{marginTop: 90}}>El id de su orden es: {orderId} </h1>
    //     </div>
    //     ) }

    if (orderId) {
        return (
          <div className="order-confirmation">
            <h1>Muchas gracias por su compra, {name}!</h1>
            <h2>El ID de su orden es: {orderId} </h2>
            <div className="order-details">
              <h3>Detalles de la compra:</h3>
              <ul>
                {cart.map((product) => (
                  <li key={product.id}>
                    {product.name} - Cantidad: {product.quantity} - Precio: ${product.price * product.quantity}
                  </li>
                ))}
              </ul>
              <p>Total: ${total}</p>
            </div>
          </div>
        );
      }

//     return (
//         <div className="Checkout">
//             <h1>FINALIZA TU COMPRA!</h1>
//             <CheckoutForm onConfirm = {createOrder}/>
//         </div>
//     )
// }

return (
    <div className="Checkout">
      <h1>FINALIZA TU COMPRA!</h1>
      <CheckoutForm onConfirm={createOrder} />
      <div className="order-summary">
        <h2>Resumen de la orden</h2>
        <p>Total: ${total}</p>
        <p>Número de productos: {cart.length}</p>
        {/* You can add more details here as needed */}
      </div>
    </div>
  );
};

export default Checkout