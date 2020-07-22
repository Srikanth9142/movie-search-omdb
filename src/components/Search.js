import React from 'react';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import { TextField } from '@material-ui/core';


function Search(props) {

    
    return (
        <div>
            <TextField id="outlined-basic" label="Search for a movie..." variant="outlined" 
            className="searchBar" 
            onChange={props.handleInput}
            onKeyPress={props.searchEvent}/>

            <Button variant="contained" color="primary" startIcon={<SearchIcon/>} onClick={()=>props.searchButtonClick()}> Search</Button>
        </div>
    )
}

export default Search
