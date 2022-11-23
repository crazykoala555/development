import "../styles/filterarea.css"
import {FormControl, InputLabel, MenuItem, Select, Typography} from "@mui/material";
import {useState} from "react";

function FilterArea (props) {


    function handleChange(event){
        props.setSortSelect(event.target.value);
    }

    return (
        <div id="filter-area">
            <Typography variant="h6">Filter List</Typography>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Sort</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={props.sortSelect}
                    label="Sort"
                    onChange={handleChange}
                >
                    <MenuItem value={"Alphabetical"}>Alphabetical</MenuItem>
                    <MenuItem value={"Price, Ascending"}>Price, Ascending</MenuItem>
                    <MenuItem value={"Price, Descending"}>Price, Descending</MenuItem>
                </Select>
            </FormControl>
        </div>
    )
}
export default FilterArea;