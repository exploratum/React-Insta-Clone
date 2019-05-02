import React from 'react'
import dummyData from '../../dummy-data';
import SearchBar from '../SearchBar/SearchBar'
import PostContainer from './PostContainer'




class PostsPage extends React.Component {
    constructor() {
        super();
        this.state = {
          posts: [],
          searchedPosts: []
        }
    }
    
    componentDidMount() {
        this.setState({
            posts: dummyData
        })
    }
    
    
    addNewComment = (comment, username) => {
        let newPost = this.state.posts.find(post => post.username === username);
        newPost.comments.push({ username: 'testUser', text: comment });

        let posts = this.state.posts.slice();
        posts = posts.map(post => {
            if (post.username === username)
                return newPost;
            else {
                return post;
            }
        })
        this.setState({
            posts: posts
        });
    }
    
    handleSearchPost = (event) => {
        const posts = this.state.posts.filter(post => post.username.includes(event.target.value))
        

        this.setState(
            { searchedPosts: posts }
        )
    }
    
    
    render() {
        return (
          <div className="App">
    
            <SearchBar handleSearchPost = {this.handleSearchPost}/>
    
            <PostContainer
              posts={this.state.searchedPosts.length > 0 ? this.state.searchedPosts : this.state.posts}
              addNewComment={this.addNewComment}
            />)
    
          </div>
        );
    }
}

export default PostsPage