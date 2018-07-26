import React, { Component } from 'react';
import {Route, NavLink, Switch} from 'react-router-dom';

import './Blog.css';
import Posts from "./Posts/Posts";
import NewPost from './NewPost/NewPost';
import FullPost from './FullPost/FullPost';
class Blog extends Component {



    render () {


        return (
            <div>
                <header className="Blog">
                    <nav>
                        <ul>
                            <li><NavLink
                                to="/"
                                exact
                                activeClassName="my-active"
                                activeStyle={{
                                    color: '#fa93cf'
                                }}
                            >Posts</NavLink></li>
                            <li><NavLink to="/new-post">New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                <Route path="/" exact component={Posts}/>
                <Switch>
                    <Route path="/new-post" component={NewPost}/>
                    <Route path="/:id" exact component={FullPost}/>
                </Switch>
            </div>
        );
    }
}

export default Blog;