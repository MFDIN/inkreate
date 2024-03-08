import useTheme  from "../context/theme/theme-context.tsx";
import styled from "@emotion/styled";
import { ReactNode } from "react";
import { darkTheme, lightTheme } from "../settings/themes.ts";

interface IButton {
    // Direction
    display?: string,
    flexDirection?: string,
    justifyContent?: string,
    alignItems?: string,

    // Layout
    position?: string,
    top?: string,
    bottom?: string,
    left?: string,
    right?: string,

    // Coloring
    backgroundColor?: string,
    hoverBackgroundColor?: string,
    color?: string,
    hoverColor?: string,

    // Size
    width?: string,
    height?: string,
    padding?: string,

    // Outline - Border
    border?: string,
    borderRadius?: string,
    borderTopLeftRadius?: string,
    borderTopRightRadius?: string,
    borderBottomLeftRadius?: string,
    borderBottomRightRadius?: string,

    // Fonts
    fontSize?: string,
    fontFamily?: string,
    fontWeight?: string,

    // Effects
    boxShadow?: string,
    cursor?: string,

    // Margins
    margin?: string,
    marginTop?: string,
    marginBottom?: string,
    marginLeft?: string,
    marginRight?: string,
    
    // Children
    children?: ReactNode
    theme?: typeof lightTheme | typeof darkTheme

    // Z Index
    zIndex?: string
    
    // Function
    onClick?: () => void

    // Animation
    transition?: string
    transform?: string

    // Box
    boxSizing?: string

    // Disabled
    disabled?: boolean
}

const Btn = styled.button<IButton>
`
    display: ${props => props.display || 'flex'};
    flex-direction: ${props => props.flexDirection || 'row'};
    justify-content: ${props => props.justifyContent || 'center'};
    align-items: ${props => props.alignItems || 'center'};
    position: ${props => props.position || 'relative'};
    top: ${props => props.top || 'auto'};
    bottom: ${props => props.bottom || 'auto'};
    left: ${props => props.left || 'auto'};
    right: ${props => props.right || 'auto'};
    background-color: ${props => props.backgroundColor || props.theme.btnBgColor || 'transparent'};
    color: ${props => props.color || props.theme.color || 'inherit'};
    width: ${props => props.width || 'auto'};
    height: ${props => props.height || 'auto'};
    padding: ${props => props.padding || '0px 0px'};
    border: ${props => props.border || 'none'};

    border-radius: ${props => props.borderRadius || '0px'};
    border-top-left-radius: ${props => props.borderRadius ? props.borderRadius :  props.borderTopLeftRadius || '0px'};
    border-top-right-radius: ${props => props.borderRadius ? props.borderRadius : props.borderTopRightRadius || '0px'};
    border-bottom-left-radius: ${props => props.borderRadius ? props.borderRadius : props.borderBottomLeftRadius || '0px'};
    border-bottom-right-radius: ${props => props.borderRadius ? props.borderRadius : props.borderBottomRightRadius || '0px'};

    margin: ${props => props.margin || '0px'};
    margin-top: ${props => props.margin ? props.margin : props.marginTop || '0px'};
    margin-bottom: ${props => props.margin ? props.margin : props.marginBottom ||'0px'};
    margin-left: ${props => props.margin ? props.margin : props.marginLeft || '0px'};
    margin-right: ${props => props.margin ? props.margin : props.marginRight || '0px'};


    font-size: ${props => props.fontSize || 'inherit'};
    font-family: ${props => props.fontFamily || 'inherit'};
    font-weight: ${props => props.fontWeight || 'normal'};
    box-shadow: ${props => props.boxShadow || 'none'};
    cursor: ${props => props.cursor || 'pointer'};
    z-index: ${props => props.zIndex || 'auto'};

    box-sizing: ${props => props.boxSizing || 'content-box'};

    // Animation
    transition: ${props => props.transition || 'none'};
    transform: ${props => props.transform || 'none'};

    // Hover
    &:hover {
        background-color: ${props => props.hoverBackgroundColor || 'none'};
        color: ${props => props.theme.hoverColor};
    }
`

export default function Button(props: IButton) {
    const { theme } = useTheme()
    return (
        <Btn {...props} theme={theme} onClick={props.onClick}>
            { props.children }
        </Btn>
    ) 
}
