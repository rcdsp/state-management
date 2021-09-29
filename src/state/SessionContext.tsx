import { FC, createContext, useState } from 'react';

interface IUserData {
  username: string;
  name: string;
  lastname: string;
}

interface ISessionContext {
  user?: IUserData;
}

export const SessionContext = createContext<ISessionContext>({});

export const SessionProvider: FC = ({ children }) => {
  const [user, setUser] = useState({});

  return (
    <SessionContext.Provider value={user}>{children}</SessionContext.Provider>
  );
};
