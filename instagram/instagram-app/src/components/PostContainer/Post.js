import React from 'react';
import PropTypes from 'prop-types';
import './Post.css'



const Post = (props) => {
    return (
        <div className='post'>
            <div className = 'user'>
                <img src={props.post.thumbnailUrl} className='thumbnail'></img>
                <h2>{props.post.username}</h2>
            </div>

            <div className='image'>
                <img src={props.post.imageUrl}></img>
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