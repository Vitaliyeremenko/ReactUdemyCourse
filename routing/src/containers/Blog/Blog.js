import React, { Component } from 'react';
import {Route, NavLink, Switch, Redirect} from 'react-router-dom';

import './Blog.css';
import Posts from "./Posts/Posts";
import NewPost from './NewPost/NewPost';
class Blog extends Component {



    render () {


        return (
            <div>
                <header className="Blog">
                    <nav>
                        <ul>
                            <li><NavLink
                                to="/posts"
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
                <Switch>
                    <Route path="/new-post" component={NewPost}/>
                    <Route path="/posts"  component={Posts}/>
                    <Redirect from="/" to='/posts' />
                    {/*<Route path="/:id" exact component={FullPost}/>*/}
                </Switch>
            </div>
        );
    }
}

export default Blog;