// #region imports
import React from "react";

import { Post } from './types/Post';
import { User } from './types/User';
import postsFromServer from './api/posts.json';
import usersFromServer from './api/users.json';
import { PostForm } from "./Components/PostForm";
import { PostList } from "./Components/PostList";
// #endregion

// #region initialPosts
function getUserById(userId: number): User | null {
  return usersFromServer.find(user => user.id === userId)
      || null;
}

const initialPosts: Post[] = postsFromServer.map(post => ({
  ...post,
  user:getUserById(post.userId),
}));
// #endregion


export const App: React.FC = () => {
  return (
    <div className="section">
      <h1 className="title">Create a post</h1>

      <PostForm />
      <PostList posts={initialPosts}/>
    </div>
  );
};
