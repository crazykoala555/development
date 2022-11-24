import "../styles/cartarea.css"
import {Typography} from "@mui/material";
import CartItem from "./CartItem";

function CartArea (props) {

    return (
        <div id="cart-area">
            <Typography variant="h6">Your Cart:</Typography>
            {props.cart.map((item, index) => (
                <CartItem
                    key={item.game} game={item.game} quantity={item.quantity}
                    addToCart={() => props.addToCart(item.game)}
                    removeFromCart={() => props.removeFromCart(item.game)}
                />
            ))}
        </div>
    )
}
export default CartArea;