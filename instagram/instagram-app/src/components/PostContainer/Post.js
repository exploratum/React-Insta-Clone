import React from 'react';
import PropTypes from 'prop-types';



const Post = (props) => {
    return(
        <div className = 'post'>
            <img src = {props.post.thumbnailUrl}></img>
            <h2>{props.post.username}</h2>
            <div className = 'image'>
                <img src = {props.post.imageUrl}></img>
            </div>
            <p>Likes: {props.post.likes}</p>

        </div>
    )
}

Post.prototype = {
    thumbnailUrl: PropTypes.string,
    username: PropTypes.string,
    imageUrl: PropTypes.string,
    likes: PropTypes.number
} 

export default Post;