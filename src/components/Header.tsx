import { FC, useContext } from 'react';
import { SessionContext } from '../state/SessionContext';

const Header: FC = () => {
  const { user } = useContext(SessionContext);

  return (
    <header>
      {user && (
        <p>
          Welcome {user.name} {user.lastname}{' '}
        </p>
      )}
    </header>
  );
};

export default Header;
