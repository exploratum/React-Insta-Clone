import React from 'react';
import PropTypes from 'prop-types';
import CommentSection from '../CommentSection/CommentSection';
import Post from './Post'


const PostContainer = (props) => {

    return(
        <div className = 'postContainer'>
                <Post post = {props.post}/>
                <CommentSection comments = {props.post.comments} timestamp = {props.post.timestamp}/>
            
        </div>
    )
}

export default PostContainer;

