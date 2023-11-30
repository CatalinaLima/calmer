import "./ItemDetail.css"
import { useState } from "react"
import React, { useContext } from 'react';
import ItemCount from "../ItemCount/ItemCount"
import { Link } from "react-router-dom"

import {CartContext} from '../../context/CartContext'

const ItemDetail = ({id,name,img,category,description,price,stock}) => {
    const [quantityAdded, setQuantityAdded] = useState (0)

    const {addItem} = useContext (CartContext)

    const handleOnAdd = (quantity) => {
        setQuantityAdded (quantity)

        const item = {
            id,name,price,img
        }

        addItem (item, quantity)
    }

    return (
        <article className="CardItemDetail">
            <picture>
                <img src={img} alt={name} className="ItemImg2" />
            </picture>
            <div className="DetailsContainer">
                <header className="HeaderDetail">
                    <h2 className="ItemHeaderDetail">{name}</h2>
                </header>
                <section className="InfoDetail">
                    <p>Categoria: {category}</p>
                    <p>Descripcion: {description}</p>
                    <p>Precio: ${price}</p>
                </section>
                <footer className="ItemFooter">
                {quantityAdded > 0 ? (
                <>
                    <Link to="/cart" className="OptionDetail">
                    Terminar compra
                    </Link>
                    <Link to="/category/books" className="OptionDetail">
                    Seguir comprando
                    </Link>
                </>
                ) : (
                <ItemCount initial={1} stock={stock} onAdd={handleOnAdd} />
                )}
                </footer>
            </div>
        </article>
    )
}

export default ItemDetail




