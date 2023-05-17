import { Component } from 'react';
import React from 'react';
import PostComponent from './Posts/PostComponent';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function AppPosts(){
return(

  <div className='AppPosts'>

    <PostComponent />

  </div>


);


}


export default AppPosts;







