import { FC, createContext, useState } from 'react';

interface ThemeInterface {
  accentColor: string;
  textColor: string;
  bgColor: string;
}

interface ThemeUtilsInterface {
  changeTextColor: (color: string) => void;
}

interface ThemeContextInterface {
  theme: ThemeInterface;
  utils: ThemeUtilsInterface;
}

const defaultTheme = {
  theme: {
    accentColor: 'blue',
    textColor: 'black',
    bgColor: 'lightgrey',
  },
  utils: {
    changeTextColor: (color: string) => {}, // this will be set by provider
  },
};

export const ThemeContext = createContext<ThemeContextInterface>(defaultTheme);

export const ThemeProvider: FC = ({ children }) => {
  const [theme, setTheme] = useState<ThemeInterface>(defaultTheme.theme);

  const changeTextColor = (color: string) => {
    if (theme.textColor !== color) {
      const updatedTheme = { ...theme };
      updatedTheme.textColor = color;
      setTheme(updatedTheme);
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, utils: { changeTextColor } }}>
      {children}
    </ThemeContext.Provider>
  );
};
