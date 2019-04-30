import React from 'react';
import './App.css';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer'
import SearchBar from './components/SearchBar/SearchBar'

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      posts: dummyData
    }
  }

  render() {
    return (
      <div className="App">

        <SearchBar />

        {this.state.posts.map(post => <PostContainer post={post} key={post.id} />)}

      </div>
    );
  }
}



export default App;
