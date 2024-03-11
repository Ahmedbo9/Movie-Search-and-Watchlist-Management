import React from "react";
const SearchBar = (props) => {
    return(
        <div className="col col-sm-5">
            <input type="text" className="form-control" placeholder="Search for a movie" value={props.value} onChange={(event) => props.setSearchValue(event.target.value)}/>
        </div>
    );
}

export default SearchBar;