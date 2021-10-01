import { FC, Suspense } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import ErrorBoundary from '../../common/components/ErrorBoundary';
import PostListSWR from '../../features/posts/PostsListSWR';

const PostPageSWR: FC = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <ErrorBoundary fallback={<p>Could not fetch data</p>}>
        <Suspense fallback={<CircularProgress />}>
          <PostListSWR />
        </Suspense>
      </ErrorBoundary>
    </Box>
  );
};

export default PostPageSWR;
