import { FC, useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

type CounterBannerType = {
  count: number;
};

const CounterBanner: FC<CounterBannerType> = ({ count }) => {
  const { accentColor } = useContext(ThemeContext);
  const bannerColor = count >= 10 ? 'lightgreen' : 'pink';
  const countMessage =
    count >= 10
      ? `Congrats! you reached ${count} in the count`
      : `Keep it up, you're still under 10`;

  console.log('banner rendering...');

  return (
    <div
      style={{
        background: bannerColor,
        padding: '4px 18px',
        marginTop: '12px',
        color: accentColor, // this is not changed in context but still re-rendering
      }}
    >
      <h3>{countMessage}</h3>
    </div>
  );
};

export default CounterBanner;
