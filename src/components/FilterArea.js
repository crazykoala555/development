import "../styles/filterarea.css"
import {
    Checkbox,
    FormControl,
    FormControlLabel,
    FormGroup,
    InputLabel,
    MenuItem,
    Select,
    Typography
} from "@mui/material";
import {useState} from "react";

function FilterArea (props) {


    function handleSortChange(event){
        props.setSortSelect(event.target.value);

    }

    // function handleCheckChange(event) {
    //     console.log(event.target.checked);
    //     console.log(event.target.value)
    // }

    return (
        <div id="filter-area">
            <Typography variant="h6">Sort</Typography>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Sort</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={props.sortSelect}
                    label="Sort"
                    onChange={handleSortChange}
                >
                    <MenuItem value={"Alphabetical"}>Alphabetical</MenuItem>
                    <MenuItem value={"Price, Ascending"}>Price, Ascending</MenuItem>
                    <MenuItem value={"Price, Descending"}>Price, Descending</MenuItem>
                </Select>
            </FormControl>
            {/*<Typography variant="h6">Filter by Genre</Typography>*/}
            {/*<FormGroup onChange={handleCheckChange}>*/}
            {/*    <FormControlLabel control={<Checkbox/>} checked={true} value="First-Person Shooter" label="First-Person Shooter" />*/}
            {/*    <FormControlLabel control={<Checkbox/>} value="Racing" label="Racing" />*/}
            {/*    <FormControlLabel control={<Checkbox/>} value="Co-Op" label="Co-Op" />*/}
            {/*    <FormControlLabel control={<Checkbox/>} value="Open World" label="Open World" />*/}
            {/*</FormGroup>*/}
            {/*<Typography variant="h6">Filter by Platform</Typography>*/}
            {/*<FormGroup>*/}
            {/*    <FormControlLabel control={<Checkbox/>} value="Xbox" label="Xbox" />*/}
            {/*    <FormControlLabel control={<Checkbox/>} value="PC" label="PC" />*/}
            {/*    <FormControlLabel control={<Checkbox/>} value="PlayStation" label="PlayStation" />*/}
            {/*    <FormControlLabel control={<Checkbox/>} value="Switch" label="Switch" />*/}
            {/*</FormGroup>*/}

        </div>
    )
}
export default FilterArea;