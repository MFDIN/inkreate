import { createContext, useContext, useState } from "react";
import { IChildren } from "../../interfaces/children-interface";
import { font } from "../../settings/font";

interface IFontContext {
    fontSize: string
    letterSpacing: string
    changeFontSize: (key: string) => void
    changeLetterSpacing: (value: number) => void
}

const FontContext = createContext<IFontContext>({} as IFontContext)

export function FontProvider({ children }: IChildren) {
    const [fontSize, setFontSize] = useState<string>(font.fontSize.XS)
    const [letterSpacing, setLetterSpacing] = useState<string>("0px")

    function changeFontSize(key: string) {
        const newFontSize = font.fontSize[key as keyof typeof font.fontSize]
        setFontSize(newFontSize)
    }

    function changeLetterSpacing(value: number) {
        const newLetterSpacing = value + "px"
        setLetterSpacing(newLetterSpacing)
    }

    const data = {fontSize, changeFontSize, letterSpacing, changeLetterSpacing}

    return (
        <FontContext.Provider value={ data } >
            { children }
        </FontContext.Provider>
    )
}

export default function useFont() {
    return useContext(FontContext)
}