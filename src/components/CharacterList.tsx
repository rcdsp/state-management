import useSWR from 'swr';
import { FC } from 'react';

import { Post } from '../mocks/api/index';

const PostList: FC = () => {
  const { data, error } = useSWR('/api/posts');
  return (
    <ul>
      {data.posts.length &&
        data.posts.map((post: Post) => <li key={post.id}>{post.title}</li>)}
    </ul>
  );
};

export default PostList;
