import { FC, Suspense } from 'react';
import CharacterList from '../components/CharacterList';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const CharactersPage: FC = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <Suspense fallback={<CircularProgress />}>
        <CharacterList />
      </Suspense>
    </Box>
  );
};

export default CharactersPage;
