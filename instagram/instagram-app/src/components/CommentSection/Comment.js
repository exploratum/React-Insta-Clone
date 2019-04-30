import React from 'react';
import PropTypes from 'prop-types';
import './Comment.css';

const Comment = (props) => {
    return (
        <div className = 'comment'>
            <p><span>{props.username}:</span> {props.text}</p>
        </div>
    )
}

Comment.propTypes = {
        username: PropTypes.string.isRequired,
        text: PropTypes.string
}

export default Comment;

