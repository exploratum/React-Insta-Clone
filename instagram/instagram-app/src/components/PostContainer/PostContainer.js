import React from 'react';
import PropTypes from 'prop-types';
import Post from './Post'


const PostContainer = (props) => {

    return(
        <div className = 'postContainer'>
                {props.posts.map(post => <Post 
                post = {post} 
                addNewComment = {props.addNewComment}
                key = {post.username}
                username = {post.username}    
                />)}
            
        </div>
    )
}

export default PostContainer;

