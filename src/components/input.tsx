import styled from '@emotion/styled'
import useFont from '../context/font/font-context'
import React from 'react'
import { darkTheme, lightTheme } from '../settings/themes'
import useTheme from '../context/theme/theme-context'
import { font } from '../settings/font'

interface IInput {
    id?: string,

    justifyContent?: string,
    alignItems?: string,
    textAlign?: string,

    width?: string,
    height?: string,
    
    padding?: string,
    paddingTop?: string,
    paddingBottom?: string,
    paddingLeft?: string,
    paddingRight?: string,

    margin?: string,
    marginTop?: string,
    marginBottom?: string,
    marginLeft?: string,
    marginRight?: string,

    color?: string,
    backgroundColor?: string,
    
    border?: string,
    outline?: string,
    borderRadius?: string,
    boxShadow?: string,
    
    cursor?: string,
    
    position?: string,
    top?: string,
    bottom?: string,
    left?: string,

    type?: string,
    children?: React.ReactNode,

    theme?: typeof lightTheme | typeof darkTheme,
    value?: string,
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void,
    onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void
    onKeyUp?: (e: React.KeyboardEvent<HTMLInputElement>) => void

    placeholder?: string,
    
    fontSize?: string,
    fontWeight?: string,

    letterSpacing?: string,

    display?: string,
    visibility?: string
}

const I = styled.input<IInput>
`
    width: ${props => props.width || 'auto'};
    height: ${props => props.height || 'auto'};

    justify-content: ${props => props.justifyContent || 'center'};
    align-items: ${props => props.alignItems || 'center'};

    text-align: ${props => props.textAlign || 'left'};
    
    color: ${props => props.color ? props.color : props.theme.inputColor || '#FFFFFF'};

    padding: ${props => props.padding || '0px'};
    padding-top: ${props => props.padding ? props.padding : props.paddingTop || '0px'};
    padding-bottom: ${props => props.   padding ? props.padding : props.paddingBottom || '0px'};
    padding-left: ${props => props.padding ? props.padding : props.paddingLeft || '0px'};
    padding-right: ${props => props.padding ? props.padding : props.paddingRight || '0px'};

    letter-spacing: ${props => props.letterSpacing || '0px'};

    display: ${props => props.display || 'block'};

    margin: ${props => props.margin || '0px'};
    margin-top: ${props => props.margin ? props.margin : props.marginTop || '0px'};
    margin-bottom: ${props => props.margin ? props.margin : props.marginBottom || '0px'};
    margin-left: ${props => props.margin ? props.margin : props.marginLeft || '0px'};
    margin-right: ${props => props.margin ? props.margin : props.marginRight || '0px'};

    background-color: ${props => props.backgroundColor || '#FFFFFF'};
    
    border: ${props => props.border || 'none'};
    outline: ${props => props.outline || 'none'};

    border-radius: ${props => props.borderRadius || '0px'};
    box-shadow: ${props => props.boxShadow || 'none'};
    
    cursor: ${props => props.cursor || 'auto'};
    visibility: ${props => props.visibility || 'visible'};
    
    position: ${props => props.position || 'static'};
    top: ${props => props.top || 'auto'};
    bottom: ${props => props.bottom || 'auto'};
    left: ${props => props.left || 'auto'};

    font-family: ${font.fontFamily};
    font-size: ${props => props.fontSize};
    font-weight: ${props => props.fontWeight || 'normal'};

    &::placeholder {
        letter-spacing: ${props => props.letterSpacing};
    }
`

function Ipt (props: IInput, ref?: React.Ref<HTMLInputElement>) {
    const { fontSize, letterSpacing } = useFont()
    const { theme } = useTheme()
    return <I 
                {... props}
                ref={ref}
                id={props.id}
                value={props.value} 
                onChange={props.onChange} 
                type={props.type}
                placeholder={props.placeholder}
                fontWeight={props.fontWeight}
                fontSize={fontSize}
                letterSpacing={letterSpacing}
                theme={theme}
                onKeyDown={(e) => props.onKeyDown && props.onKeyDown(e)}
                onKeyUp={(e) => props.onKeyUp && props.onKeyUp(e)}
                >
                {props.children}
            </I>
}

const Input = React.forwardRef(Ipt)
export default Input