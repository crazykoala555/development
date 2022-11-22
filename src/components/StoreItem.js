import CardMedia from "@mui/material/CardMedia";
import {Button, Card, CardActions, CardContent, Typography} from "@mui/material";
import "../styles/itemarea.css"

function StoreItem (props) {
    return(
        <div className="itemCard">
            <Card sx={{ minWidth: 350 }}>
                <CardMedia
                    component="img"
                    height="150"
                    image={props.thumbnail}
                    alt={props.name}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {props.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {props.description}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Add to Cart</Button>
                </CardActions>
            </Card>
        </div>
    )
}
export default StoreItem;