import React, { useState, createContext, useEffect } from 'react';
import light from "./themes/light";
import dark from "./themes/dark";
import { DefaultTheme, ThemeProvider } from 'styled-components';


export interface IContextTheme{
    children: React.ReactNode
}

export type TThemeContext = {
    theme: DefaultTheme;
    toogleTheme(): void;
}

export const ThemeContext = createContext({} as TThemeContext);  
 

function ContextTheme({children}: IContextTheme) {
    const [ theme, setTheme ] = useState<DefaultTheme>(light);


    const toogleTheme = () => {
        setTheme(theme.title==='light'? dark : light);
    }

    return (
        <ThemeContext.Provider
            value={{
                theme,
                toogleTheme
            }}
        >
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </ThemeContext.Provider>
    )

}

export default ContextTheme;