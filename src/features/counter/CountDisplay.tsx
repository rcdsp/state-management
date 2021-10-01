import { FC, useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { Button } from '@mui/material';

type CounterDisplayType = {
  count: number;
};

const CounterDisplay: FC<CounterDisplayType> = ({ count, children }) => {
  const { textColor, changeTextColor } = useContext(ThemeContext);

  console.log('display rendering...'); // component will rerender when color is changed

  return (
    <>
      <span style={{ margin: '0 12px', color: textColor }}>
        Current count is {count}
      </span>
      <Button variant="contained" onClick={() => changeTextColor('red')}>
        Change text color!
      </Button>
      {children}
    </>
  );
};

export default CounterDisplay;
