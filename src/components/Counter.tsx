import { FC } from 'react';
import { Button } from '@mui/material';

type CounterType = {
  count: number;
  increment: () => void;
};

const Counter: FC<CounterType> = ({ count, increment }) => {
  return (
    <Button variant="contained" onClick={increment}>
      {count}
    </Button>
  );
};

export default Counter;
