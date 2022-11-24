import './styles/App.css';
import FilterArea from "./components/FilterArea";
import ItemArea from "./components/ItemArea";
import CartArea from "./components/CartArea";
import {Typography} from "@mui/material";
import {useState} from "react";

function App() {

    const [cart, setCart] = useState([]);

    const [sortSelect, setSortSelect] = useState("");

    const [genreSelect, setGenreSelect] = useState({
        FirstPersonShooter: true,
        Racing: true,
        CoOp: true,
        OpenWorld: true
    });

    const [platformSelect, setPlatformSelect] = useState({
        Xbox: true,
        PC: true,
        PlayStation: true,
        Switch: true
    });

    function addToCart(item){
        let name = item.name;
        console.log(item.name);
    }


    return (
    <div className="App">
        <FilterArea
            sortSelect={sortSelect} setSortSelect={setSortSelect}
            genreSelect={genreSelect} setGenreSelect={setGenreSelect}
            platformSelect={platformSelect} setPlatformSelect={setPlatformSelect}
        />
        <CartArea cart={cart}/>
        <div id="itemArea">
            <div id="siteTitle">
                <Typography variant="h3">The Game Zone</Typography>
            </div>
            <div id="content">
                <ItemArea sortSelect={sortSelect} genreSelect={genreSelect}
                          setSortSelect={setSortSelect} platformSelect={platformSelect}
                          cart={cart} setCart={setCart} addToCart={addToCart}
                />
            </div>
        </div>
    </div>
  );
}

export default App;
