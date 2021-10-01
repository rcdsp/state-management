import { FC, createContext, useState } from 'react';

interface ThemeContextInterface {
  accentColor: string;
  textColor: string;
  bgColor: string;
  changeTextColor: (color: string) => void;
}

const defaultTheme = {
  accentColor: 'blue',
  textColor: 'black',
  bgColor: 'lightgrey',
  changeTextColor: (color: string) => {}, // this will be set by provider
};

export const ThemeContext = createContext<ThemeContextInterface>(defaultTheme);

export const ThemeProvider: FC = ({ children }) => {
  const [theme, setTheme] = useState<ThemeContextInterface>(defaultTheme);

  const changeTextColor = (color: string) => {
    if (theme.textColor !== color) {
      const updatedTheme = { ...theme };
      updatedTheme.textColor = color;
      setTheme(updatedTheme);
    }
  };

  return (
    <ThemeContext.Provider value={{ ...theme, changeTextColor }}>
      {children}
    </ThemeContext.Provider>
  );
};
