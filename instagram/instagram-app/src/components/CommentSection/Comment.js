import React from 'react';
import PropTypes from 'prop-types';

const Comment = (props) => {
    return (
        <div>
            {props.username}
            <p>{props.text}</p>
        </div>
    )
}

Comment.propTypes = {
        username: PropTypes.string.isRequired,
        text: PropTypes.string
}

export default Comment;

