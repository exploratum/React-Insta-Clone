import React from 'react';
import './App.css';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer'
import SearchBar from './components/SearchBar/SearchBar'

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      posts: []
    }
  }

  componentDidMount() {
    this.setState({
      posts: dummyData
    })
  }


  addNewComment = (comment, username) => {
    //Copy post to add comments from and append new comment to it
    let newPost = this.state.posts.find(post => post.username === username);
    newPost.comments.push({username: 'testUser', text: comment});

    //Create copy of array of posts and replace the one that needs new comment
    let posts = this.state.posts.slice();
    posts = posts.map(post => {
      if (post.username === username)
        return newPost;
      else {
        return post;
      }
    })
    //Update posts array in state
    this.setState({
      posts: posts
    });
  }

  // incrementLikes = (username) => {
  //   let updatedPost = this.state.posts.find(post => post.username === username);
  //   updatedPost.likes ++;
  //   console.log(updatedPost.likes);

  //   let posts = this.state.posts.slice();
  //   posts = posts.map(post => {
  //     if (post.username === username)
  //       return updatedPost;
  //     else
  //       return post
  //   })

  // }



  render() {
    return (
      <div className="App">

        <SearchBar />

        <PostContainer
          posts={this.state.posts}
          addNewComment={this.addNewComment}
          incrementLikes = {this.incrementLikes}
        />)

      </div>
    );
  }
}



export default App;
