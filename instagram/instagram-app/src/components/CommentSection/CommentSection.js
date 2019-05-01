import React from 'react';
import Comment from './Comment'
import NewComment from './NewComment'

class CommentSection extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            newComment: ''
        }
        console.log(props);
    }

    handleCommentChange = (event) => {
        this.setState({
            newComment: event.target.value
        })
    }

    handleSubmitComment = (event) => {
        event.preventDefault();
        this.props.addNewComment(this.state.newComment, this.props.username);
        this.setState({newComment: ''});

        

    }

    render() {
        return (

            <>
                <div>
                    {this.props.comments.map((comment, index) => (
                        <Comment
                            username={comment.username}
                            text={comment.text}
                            key={index}
                        />
                    ))}

                    <NewComment
                        handleCommentChange={this.handleCommentChange}
                        handleSubmitComment={this.handleSubmitComment}
                        newComment={this.state.newComment}
                    />
                </div>

                <p>{this.timestamp}</p>

            </>
        )
    }


}

export default CommentSection;