import React from 'react'
import styled from 'styled-components'



const H2Styled = styled.h2 `
    width: 24%;
`

const FormStyled = styled.form `
    padding-top: 25px;
    width: 73%;
`


const SearchBarStyled = (props) => {
    return (
        <>
            <H2Styled>Instagram</H2Styled>
            <FormStyled>
                search: <input onKeyDown={props.handleSearchPost} />
            </FormStyled>
        </>

    )
}

export default SearchBarStyled
