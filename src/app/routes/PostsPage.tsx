import { FC } from 'react';

import Box from '@mui/material/Box';
import PostList from '../../features/posts/PostsList';

const PostPage: FC = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <PostList />
    </Box>
  );
};

export default PostPage;
