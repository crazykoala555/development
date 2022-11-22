import './styles/App.css';
import FilterArea from "./components/FilterArea";
import ItemArea from "./components/ItemArea";
import CartArea from "./components/CartArea";
import {Typography} from "@mui/material";

function App() {
  return (
    <div className="App">
        <div id="siteTitle">
            <Typography variant="h3">Welcome to the Game Zone!</Typography>
            <Typography variant="h6">Feel free to add games to your cart :)</Typography>
        </div>
        <div id="content">
            <FilterArea/>
            <ItemArea/>
            {/*<CartArea/>*/}
        </div>

    </div>
  );
}

export default App;
