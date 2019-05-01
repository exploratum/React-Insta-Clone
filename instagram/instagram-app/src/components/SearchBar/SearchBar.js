import React from 'react';
import './SearchBar.css';

const Searchbar = (props) => {
    return (
        <header>
            <h2>Instagram</h2>

            <form>
                search:  <input onKeyDown = {props.handleSearchPost}/>
            </form>
        </header>
    )
}

export default Searchbar;