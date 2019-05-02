import React from 'react';
import PropTypes from 'prop-types';
import './Post.css'
import CommentSection from '../CommentSection/CommentSection'



class Post extends React.Component{

    constructor(props) {
        super(props)
        this.state = {
            likes: props.post.likes
        }
    }

    //Increments likes when clicking on heart
    handleClickHeart = () => {
        this.setState (
            prevState => {return {likes: prevState.likes + 1}}
        )

    }

    render () {
        return (
            <div className='post'>
                <div className = 'user'>
                    <img src={this.props.post.thumbnailUrl} className='thumbnail' alt='logo '></img>
                    <h2>{this.props.post.username}</h2>
                </div>
    
                <div className='image'>
                    <img src={this.props.post.imageUrl} alt='user'></img>
                </div>
                <div className="likes" >
                    <img src="https://img.icons8.com/color/2x/hearts.png" alt="likes" onClick={this.handleClickHeart}/>
                    <p><span>Likes: </span>  {this.state.likes}</p>
                </div>
                
    
                <CommentSection 
                comments = {this.props.post.comments} 
                timestamp = {this.props.post.timestamp}
                addNewComment = {this.props.addNewComment}
                username = {this.props.username}
                />
            </div>
        )
    }
    
    
}

// Post.prototype = {
//     thumbnailUrl: PropTypes.string,
//     username: PropTypes.string,
//     imageUrl: PropTypes.string,
//     likes: PropTypes.number
// }

export default Post;