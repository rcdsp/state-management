import { FC } from 'react';
import { Button } from '@mui/material';

type CounterType = {
  count: number;
  increment: () => void;
};

const CounterButton: FC<CounterType> = ({ count, increment }) => {
  return (
    <Button variant="contained" onClick={increment}>
      {count}
    </Button>
  );
};

export default CounterButton;
