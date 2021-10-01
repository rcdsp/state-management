import { FC, useState } from 'react';
import { Container } from '@mui/material';
import Counter from '../components/Counter';
import CounterDisplay from '../components/CountDisplay';
import CounterBanner from '../components/CountBanner';

const CounterPage: FC = () => {
  const [count, setCount] = useState(0);
  const increment = () => setCount((count) => count + 1);

  return (
    <Container maxWidth="sm">
      <Counter count={count} increment={increment} />
      <CounterDisplay count={count}>
        <CounterBanner count={count} />
      </CounterDisplay>
    </Container>
  );
};

export default CounterPage;
