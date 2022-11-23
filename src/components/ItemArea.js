import gameData from "../data/data.json"
import StoreItem from "./StoreItem";
import "../styles/itemarea.css"

gameData.forEach((item) => {
    item.thumbnail = process.env.PUBLIC_URL + "/" + item.thumbnail;
});

function ItemArea (props) {
    return (
        <div id="item-area">
            {gameData.map((item, index) => (
                <StoreItem key={item.name}
                    name={item.name} description={item.description}
                    studio={item.studio} genre={item.genre}
                    platform={item.platform} price={item.price}
                    thumbnail={item.thumbnail}
                />
            ))}
        </div>
    )
}
export default ItemArea;