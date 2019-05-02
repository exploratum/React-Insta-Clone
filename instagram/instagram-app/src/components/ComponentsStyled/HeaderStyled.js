import React from 'react'
import styled from 'styled-components'

import SearchBarStyle from './SearchBarStyled'

const Header = styled.header `
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    background: rgb(105, 194, 189);
    margin: 20px 0;   
`

const HeaderStyled = (props) => {
    return(
        <Header>
            <SearchBarStyle handleSearcPost={props.handleSearcPost}/>
        </Header>
    )
}

export default HeaderStyled