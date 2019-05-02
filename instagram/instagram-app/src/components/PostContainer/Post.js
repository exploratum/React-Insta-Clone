import React from 'react';
import PropTypes from 'prop-types';
//import './Post.css'
import CommentSection from '../CommentSection/CommentSection'
import styled from 'styled-components'

const PostDivStyled = styled.div `
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
`

const UserDivStyled = styled.div `
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    width: 100%;
`

const ThumbnailImgStyled = styled.img `
    margin-top: 40px;
    display: block;
    width: 50px;
    height: 50px;
`

const UsernameH2Styled = styled.h2 `
    width: 50%;
    padding-left: 10px;
    text-align: left;
`
const ImageStyled = styled.img `
     margin-top: 10px;

`

const LikesDivStyled = styled.div `
    width: 100%;
`


const LikesImgStyled = styled.img `
    width: 48px;
    cursor: pointer;
`

const PStyled = styled.p `
    width: 100%;
    text-align: center;
`

const SpanStyled = styled.span `
 font-weight: bold;
`


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
            <PostDivStyled>
                <UserDivStyled>
                    <ThumbnailImgStyled src={this.props.post.thumbnailUrl} className='thumbnail' alt='logo ' />
                    <UsernameH2Styled>{this.props.post.username}</UsernameH2Styled>
                </UserDivStyled>
    
                <div>
                    <ImageStyled src={this.props.post.imageUrl} alt='user' />
                </div>

                <LikesDivStyled >
                    <LikesImgStyled src="https://img.icons8.com/color/2x/hearts.png" alt="likes" onClick={this.handleClickHeart}/>
                    <PStyled><SpanStyled>Likes: </SpanStyled>  {this.state.likes}</PStyled>
                </LikesDivStyled>
                
    
                <CommentSection 
                comments = {this.props.post.comments} 
                timestamp = {this.props.post.timestamp}
                addNewComment = {this.props.addNewComment}
                username = {this.props.username}
                />
            </PostDivStyled>
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