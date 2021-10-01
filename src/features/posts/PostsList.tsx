import { FC } from 'react';
import { Post, useGetPostsQuery } from '../../services/api';

const PostList: FC = () => {
  const { data, error, isLoading } = useGetPostsQuery(null);

  if (isLoading) return <p>Loading...</p>;

  if (error) {
    return <p>{error}</p>;
  } else {
    return (
      <ul>
        <ul>
          {data?.map((post: Post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      </ul>
    );
  }
};

export default PostList;
