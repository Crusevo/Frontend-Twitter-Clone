import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import AppUsers from './AppUsers';
import AppPosts from './AppPosts';



const rootUsers = ReactDOM.createRoot(document.getElementById('users'));
rootUsers.render(<React.StrictMode> <AppUsers /> </React.StrictMode>);

const rootPosts = ReactDOM.createRoot(document.getElementById('posts'));
rootPosts.render(<React.StrictMode> <AppPosts /> </React.StrictMode>);


