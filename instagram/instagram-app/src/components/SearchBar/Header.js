import React from 'react';
import '../ComponentsStyled/HeaderStyled'
import HeaderStyled from '../ComponentsStyled/HeaderStyled';

const Header = (props) => {
    return (
        <SearchBarStyled handleSearchPost = {props.handleSearchPost}/>
    )
}

export default Header;