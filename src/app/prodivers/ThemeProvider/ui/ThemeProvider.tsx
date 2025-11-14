import { type FC, type PropsWithChildren, useMemo, useState } from 'react';

import {
    LOCAL_STORAGE_THEME_KEY,
    Theme,
    ThemeContext,
} from '../model/ThemeContext';

const isTheme = (theme: string): theme is Theme => {
    return theme !== null && (theme === Theme.LIGHT || theme === Theme.DARK);
};

const localStorageTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY);
const defaultTheme = isTheme(localStorageTheme)
    ? localStorageTheme
    : Theme.DARK;

export const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
    const [theme, setTheme] = useState<Theme>(defaultTheme);

    const defaultProps = useMemo(
        () => ({
            theme,
            setTheme,
        }),
        [theme]
    );

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    );
};
