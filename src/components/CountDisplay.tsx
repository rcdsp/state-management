import { FC } from 'react';

type CounterDisplayType = {
  count: number;
};

const CounterDisplay: FC<CounterDisplayType> = ({ count, children }) => {
  return (
    <>
      <p>Current count is {count}</p>
      {children}
    </>
  );
};

export default CounterDisplay;
