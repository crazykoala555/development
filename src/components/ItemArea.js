import gameData from "../data/data.json"
import StoreItem from "./StoreItem";
import "../styles/itemarea.css"
import {useEffect, useState} from "react";

gameData.forEach((item) => {
    item.thumbnail = process.env.PUBLIC_URL + "/" + item.thumbnail;
});


function ItemArea (props) {

    useEffect(() => {handleSort()}, [props.sortSelect])

    const [itemList, setItemList] = useState(gameData);

    function handleSort(){
        let tempList = [...itemList];
        switch (props.sortSelect){
            case "Price, Ascending" :
                console.log("ascending")
                tempList.sort(sortAscending);
                setItemList(tempList);
                break;
            case "Price, Descending" :
                console.log("descending")
                tempList.sort(sortDescending);
                setItemList(tempList);
                break;
            case "Alphabetical" :
                console.log("alphabetical")
                tempList.sort(sortAlphabetical);
                setItemList(tempList);
                break;
        }
    }

    function sortAscending (a, b) {
        if(a.price > b.price){
            return 1;
        }
        if(a.price < b.price){
            return -1;
        }
        return 0;
    }
    function sortDescending (a, b) {
        if(a.price > b.price){
            return -1;
        }
        if(a.price < b.price){
            return 1;
        }
        return 0;
    }
    function sortAlphabetical (a, b) {
        let name1 = a.name.toUpperCase();
        let name2 = b.name.toUpperCase();
        if(name1 > name2){
            return 1;
        }
        if(name1 < name2){
            return -1;
        }
        return 0;
    }
    return (
        <div id="item-area">
            {itemList.map((item, index) => (
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