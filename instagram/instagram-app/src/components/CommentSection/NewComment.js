import React from 'react'

const NewComment = (props) => {
    
    return (
        <form onSubmit={props.handleSubmitComment}>
        
            <input type="text" 
            placeholder='Add a comment...'
            value={props.newComment}
            onChange={props.handleCommentChange}/>

            <input type='submit'/>
        </form>
    )
}

export default NewComment;