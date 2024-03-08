import { createContext, useContext, useState } from "react";
import { IChildren } from "../../interfaces/children-interface";
import { lightTheme, darkTheme } from "../../settings/themes";

interface IThemeContext {
    isDarkMode: boolean,
    changeTheme: () => void;
    theme: typeof lightTheme | typeof darkTheme
}

const ThemeContext = createContext<IThemeContext>({} as IThemeContext);

export function ThemeProvider({ children }: IChildren) {
    const [isDarkMode, setIsDarkMode] = useState<boolean>(false)

    function changeTheme() {
        setIsDarkMode(!isDarkMode)   
    }

    const theme = isDarkMode ? darkTheme : lightTheme

    const data = { isDarkMode, changeTheme, theme }

    return (
        <ThemeContext.Provider value={ data }>
            { children }    
        </ThemeContext.Provider>
    )
}

export default function useTheme() {
    return useContext(ThemeContext)
}