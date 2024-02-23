import React from "react";

import { Post } from "../../types/Post";
// import './PostList.scss';

type Props = {
  posts: Post[];
};

export const PostList: React.FC<Props> = ({ posts }) => {
  return (
    <table className="box tabla is-striped is-narrow">
      <thead>
        <tr className="has-background-link-light">
          <th>#</th>
          <th>Tile</th>
          <th>User</th>
        </tr>
      </thead>

      <tbody>
        {posts.map((post) => (
          <tr key={post.id}>
            <td>{post.id}</td>
            <td>{post.title}</td>
            <td>{post.userId}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
