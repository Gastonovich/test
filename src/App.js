import React from 'react';
import {Route} from 'react-router-dom';
import ListOfPosts from './components/ListOfPosts';
import Post from './components/Post';


function App() {
  return (
   <>
    <Route exact path='/' component={ListOfPosts} />
    <Route path='/posts/:postId' component={Post} /> 
   </>
  );
}

export default App;
