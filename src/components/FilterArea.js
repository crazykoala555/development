import "../styles/filterarea.css"
import {
    Button,
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

    function handleReset () {
        props.setSortSelect("");
        props.setGenreSelect({
            FirstPersonShooter: true,
            Racing: true,
            CoOp: true,
            OpenWorld: true
        })
        props.setPlatformSelect({
            Xbox: true,
            PC: true,
            PlayStation: true,
            Switch: true
        })
    }

    function handleSortChange(event){
        props.setSortSelect(event.target.value);
    }

    function handleGenreChange(event) {
        props.setGenreSelect({
            ...props.genreSelect,
            [event.target.value]: event.target.checked,
        });
    }

    function handlePlatformChange(event) {
        props.setPlatformSelect({
            ...props.platformSelect,
            [event.target.value]: event.target.checked,
        });
    }

    const { FirstPersonShooter, Racing, CoOp, OpenWorld } = props.genreSelect;
    const { Xbox, PC, PlayStation, Switch } = props.platformSelect;

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
            <Typography variant="h6">Filter by Genre</Typography>
            <FormGroup >
                <FormControlLabel control={<Checkbox onChange={handleGenreChange} checked={FirstPersonShooter} value="FirstPersonShooter"/>}   label="First-Person Shooter" />
                <FormControlLabel control={<Checkbox onChange={handleGenreChange} checked={Racing} value="Racing"/>}  label="Racing" />
                <FormControlLabel control={<Checkbox onChange={handleGenreChange} checked={CoOp} value="CoOp"/>} label="Co-Op" />
                <FormControlLabel control={<Checkbox onChange={handleGenreChange} checked={OpenWorld} value="OpenWorld" />} label="Open World" />
            </FormGroup>
            <Typography variant="h6">Filter by Platform</Typography>
            <FormGroup>
                <FormControlLabel control={<Checkbox onChange={handlePlatformChange} checked={Xbox} value="Xbox"/>} label="Xbox" />
                <FormControlLabel control={<Checkbox onChange={handlePlatformChange} checked={PC} value="PC"/>} label="PC" />
                <FormControlLabel control={<Checkbox onChange={handlePlatformChange} checked={PlayStation} value="PlayStation"/>} label="PlayStation" />
                <FormControlLabel control={<Checkbox onChange={handlePlatformChange} checked={Switch} value="Switch"/>} label="Switch" />
            </FormGroup>
            <Button variant="contained" onClick={handleReset}>Reset</Button>
        </div>
    )
}
export default FilterArea;