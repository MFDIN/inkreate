import styled from "@emotion/styled";
import useTheme from "../context/theme/theme-context";
import { darkTheme, lightTheme } from "../settings/themes";

interface IContainer {
    justifyContent?: string,
    alignItems?: string,
    
    gap?: string,
    
    width?: string,
    height?: string,
    
    margin?: string,
    marginTop?: string,
    marginBottom?: string,
    marginLeft?: string,
    marginRight?: string,

    padding?: string,
    paddingTop?: string,
    paddingBottom?: string,
    paddingLeft?: string,
    paddingRight?: string,

    backgroundColor?: string,
    
    border?: string,
    borderRadius?: string,
    boxShadow?: string,

    boxSizing?: string,
    
    cursor?: string,
    
    position?: string,
    top?: string,
    bottom?: string,
    left?: string,
    right?: string,
    zIndex?: string,

    children?: React.ReactNode
    theme?: typeof lightTheme | typeof darkTheme
}

const Container = styled.div<IContainer>
`
    display: flex;

    justify-content: ${props => props.justifyContent || 'center'};
    align-items: ${props => props.alignItems || 'center'};
    
    gap: ${props => props.gap || '0px'};
    
    width: ${props => props.width || 'auto'};
    height: ${props => props.height || 'auto'};

    margin: ${props => props.margin || '0px'};
    margin-top: ${props => props.margin ? props.margin : props.marginTop || '0px'};
    margin-bottom: ${props => props.margin ? props.margin : props.marginBottom || '0px'};
    margin-left: ${props => props.margin ? props.margin : props.marginLeft || '0px'};
    margin-right: ${props => props.margin ? props.margin : props.marginRight || '0px'};

    padding: ${props => props.padding || '0px'};
    padding-top: ${props => props.padding ? props.padding : props.paddingTop || '0px'};
    padding-bottom: ${props => props.padding ? props.padding : props.paddingBottom || '0px'};
    padding-left: ${props => props.padding ? props.padding : props.paddingLeft || '0px'};
    padding-right: ${props => props.padding ? props.padding : props.paddingRight || '0px'};

    background-color: ${props => props.backgroundColor || 'transparent'};
    
    border: ${props => props.border || 'none'};
    border-radius: ${props => props.borderRadius || 'none'};
    
    box-shadow: ${props => props.boxShadow || 'none'};
    cursor: ${props => props.cursor || 'auto'};
    
    position: ${props => props.position || 'relative'};
    top: ${props => props.top || 'auto'};
    bottom: ${props => props.bottom || 'auto'};
    left: ${props => props.left || 'auto'};
    right: ${props => props.right || 'auto'};
    z-index: ${props => props.zIndex || 'auto'};
    
    box-sizing: ${props => props.boxSizing || 'content-box'};
`

export default function HContainer(props: IContainer) {
    const { theme } = useTheme();
    return <Container {...props} theme={theme}>{props.children}</Container>
}