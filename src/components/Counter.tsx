import { FC } from 'react';

type CounterType = {
  count: number;
  increment: () => void;
};

const Counter: FC<CounterType> = ({ count, increment }) => {
  return <button onClick={increment}>{count}</button>;
};

export default Counter;
