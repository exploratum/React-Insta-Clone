import React from 'react';
import PropTypes from 'prop-types';
//import './Comment.css';
import styled from 'styled-components'





const CommentWrapper = styled.div `
    width: 100%;
`

const Paragraph = styled.p `
    text-align: left;
`

const Span = styled.span `
    font-weight: bold
`

const Comment = (props) => {
    return (
        <>
            <CommentWrapper>
                <Paragraph><Span>{props.username}:</Span> {props.text}</Paragraph>
            </CommentWrapper>
        </>
    )
}

Comment.propTypes = {
    username: PropTypes.string,
    text: PropTypes.string,
    addComment: PropTypes.func
}

export default Comment;

