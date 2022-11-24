import './styles/App.css';
import FilterArea from "./components/FilterArea";
import ItemArea from "./components/ItemArea";
import CartArea from "./components/CartArea";
import {Typography} from "@mui/material";
import {useState} from "react";

function App() {

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

    return (
    <div className="App">
        <FilterArea
            sortSelect={sortSelect} setSortSelect={setSortSelect}
            genreSelect={genreSelect} setGenreSelect={setGenreSelect}
            platformSelect={platformSelect} setPlatformSelect={setPlatformSelect}
        />
        <div id="nonFilterArea">
            <div id="siteTitle">
                <Typography variant="h3">Welcome to the Game Zone!</Typography>
                <Typography variant="h6">Feel free to add games to your cart :)</Typography>
            </div>
            <div id="content">
                <ItemArea sortSelect={sortSelect} genreSelect={genreSelect}
                          setSortSelect={setSortSelect} platformSelect={platformSelect}
                />
                {/*<CartArea/>*/}
            </div>
        </div>
    </div>
  );
}

export default App;
