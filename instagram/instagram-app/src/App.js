import React from 'react';
import './App.css';
import PostsPage from './components/PostContainer/PostsPage'
import Authenticate from './components/authentication/Authenticate'

const ComponentFromWithAuthenticate = Authenticate(PostsPage)

class App extends React.Component {



 render() {
   return( 
    <ComponentFromWithAuthenticate/>
   )
 }
}

export default App;
