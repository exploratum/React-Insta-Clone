import React from 'react';
import Comment from './Comment'

const CommentSection = (props) => {
    
    return(

        <>
        <div>
            {props.comments.map(comment => (
                <Comment username = {comment.username} text = {comment.text} key={comment.username} />
             ))}
        </div>

        <p>{props.timestamp}</p>

        </>
    )
}

export default CommentSection;