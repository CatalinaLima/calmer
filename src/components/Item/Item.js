import "./Item.css"
import {NavLink, Link} from "react-router-dom"

const Item = ({id,name,img,price,stock}) => {

    return (
        <article className = "CardItem">
            <picture>
                <Link to = {`/item/${id}`} className="access"><img src={img} alt={name} className="ItemImg"/></Link>
            </picture>
            <section>
            <header className = "Header">
                <h2 className = "ItemHeader">
                    {name}
                </h2>
            </header>
                <p className="Info">
                    ${price}
                </p>
                {/* <p className="Info">
                    stock : {stock} unidades
                </p> */}
            </section>
        </article>
    )
}



export default Item