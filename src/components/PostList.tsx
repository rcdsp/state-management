import useSWR from 'swr';
import { FC } from 'react';

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const PostList: FC = () => {
  const { data } = useSWR('https://.typicode.com/posts');

  return (
    <ul>
      <ul>
        {data.map((post: Post) => (
          <li key={post.id}>{post.title}</li>
        ))}{' '}
      </ul>
    </ul>
  );
};

export default PostList;
