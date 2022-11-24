import "../styles/cartarea.css"
import {Typography} from "@mui/material";
import CartItem from "./CartItem";

function CartArea (props) {


    const dummyCartItem = {
        game: {
            "name": "Overcooked 2",
            "description": "Collaborative Cooking Game, Version 2!",
            "studio" : "Team17",
            "genre" : "Co-Op",
            "platform" : ["Xbox", "PC", "PlayStation", "Switch"],
            "price": 29.99,
            "thumbnail": "images/overcooked2.jpg"
        },
        quantity : 1
    }

    const dummyCart = [dummyCartItem];


    return (
        <div id="cart-area">
            <Typography variant="h6">Your Cart:</Typography>
            {dummyCart.map((item, index) => (
                <CartItem key={item.game} game={item.game} quantity={item.quantity}/>
            ))}
        </div>
    )
}
export default CartArea;