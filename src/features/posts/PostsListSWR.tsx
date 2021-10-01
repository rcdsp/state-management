import useSWR from 'swr';
import { FC } from 'react';
import { Post } from '../../services/api';

const PostList: FC = () => {
  /* error and loading state can also be obtained from useSWR */
  const { data } = useSWR('https://jsonplaceholder.typicode.com/posts');

  return (
    <ul>
      {data?.map((post: Post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
};

export default PostList;
