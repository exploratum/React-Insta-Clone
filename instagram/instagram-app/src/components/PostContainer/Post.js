import React from 'react';
import PropTypes from 'prop-types';
import './Post.css'
import CommentSection from '../CommentSection/CommentSection'



const Post = (props) => {
    console.log(`in Post username is: ${props.username}`)
    return (
        <div className='post'>
            <div className = 'user'>
                <img src={props.post.thumbnailUrl} className='thumbnail' alt='logo '></img>
                <h2>{props.post.username}</h2>
            </div>

            <div className='image'>
                <img src={props.post.imageUrl} alt='user'></img>
            </div>
            <p><span>Likes: </span>  {props.post.likes}</p>

            <CommentSection 
            comments = {props.post.comments} 
            timestamp = {props.post.timestamp}
            addNewComment = {props.addNewComment}
            username = {props.username}
            />
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