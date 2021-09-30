import { FC, Suspense } from 'react';
import PostList from '../components/CharacterList';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const PostsPage: FC = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <Suspense fallback={<CircularProgress />}>
        <PostList />
      </Suspense>
    </Box>
  );
};

export default PostsPage;
