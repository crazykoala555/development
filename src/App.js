import './styles/App.css';
import FilterArea from "./components/FilterArea";
import ItemArea from "./components/ItemArea";
import CartArea from "./components/CartArea";
import {Typography} from "@mui/material";
import {useState} from "react";

function App() {

    const [sortSelect, setSortSelect] = useState("");

    return (
    <div className="App">
        <FilterArea sortSelect={sortSelect} setSortSelect={setSortSelect}/>
        <div id="nonFilterArea">
            <div id="siteTitle">
                <Typography variant="h3">Welcome to the Game Zone!</Typography>
                <Typography variant="h6">Feel free to add games to your cart :)</Typography>
            </div>
            <div id="content">
                <ItemArea sortSelect={sortSelect}/>
                {/*<CartArea/>*/}
            </div>
        </div>
    </div>
  );
}

export default App;
