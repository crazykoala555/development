import {Button, ButtonGroup} from "@mui/material";

function CartItem (props) {


    return(
        <div className="cartItem">
            <b className="cartItemTitle">{props.game.name}</b>
            <br/>
            ${props.game.price}
            <br/>
            Quantity: {props.quantity}
            <br/>
            <ButtonGroup variant="outlined" size="small" aria-label="small button group">
                <Button>+</Button>
                <Button>-</Button>
            </ButtonGroup>
        </div>
    )
}
export default CartItem;