import { FC, Suspense } from 'react';
import PostList from '../../common/components/PostList';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import ErrorBoundary from '../../common/components/ErrorBoundary';

const PostsPage: FC = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <ErrorBoundary fallback={<p>Could not fetch data</p>}>
        <Suspense fallback={<CircularProgress />}>
          <PostList />
        </Suspense>
      </ErrorBoundary>
    </Box>
  );
};

export default PostsPage;