import styled from "@emotion/styled";
import useTheme from "../context/theme/theme-context";
import HContainer from "../layout/h-container";
import { darkTheme, lightTheme } from "../settings/themes";

interface ISpinner {
    width?: string,
    height?: string,
    backgroundColor?: string,
    borderRadius?: string,
    boxShadow?: string,
    cursor?: string,
    position?: string,
    top?: string,
    bottom?: string,
    left?: string,
    right?: string,
    zIndex?: string,
    theme?: typeof lightTheme | typeof darkTheme
}

export default function Spinner(props: ISpinner) {
    const { theme } = useTheme()

    return (
        <HContainer {...props} >

        </HContainer>
    )
    
}