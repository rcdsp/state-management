import { FC /*, useState*/ } from 'react';
import { RootState } from '../../app/store';
import { useSelector, useDispatch } from 'react-redux';
import { increment } from './counterSlice';
import { Container } from '@mui/material';
import CounterButton from './CounterButton';
import CounterDisplay from './CountDisplay';
import CounterBanner from './CountBanner';

const Counter: FC = () => {
  // Lifting State Up
  // const [count, setCount] = useState(0);
  // const increment = () => setCount((count) => count + 1);

  // Redux State
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <Container maxWidth="sm">
      <CounterButton count={count} increment={() => dispatch(increment())} />
      <CounterDisplay count={count}>
        <CounterBanner count={count} />
      </CounterDisplay>
    </Container>
  );
};

export default Counter;
