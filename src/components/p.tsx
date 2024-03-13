import styled from '@emotion/styled'
import { darkTheme, lightTheme } from '../settings/themes'
import useTheme  from '../context/theme/theme-context.tsx'
import { font } from '../settings/font.ts'
import React from 'react'

interface IP {
    opacity?: string,
    height?: string,
    fontSize?: string,
    fontFamily?: string,
    fontWeight?: string,
    color?: string,
    textAlign?: string,
    margin?: string,
    display?: string,
    letterSpacing?: string,
    overflow?: string,
    whiteSpace?: string,
    textShadow?: string

    // Children
    children?: React.ReactNode
    theme?: typeof lightTheme | typeof darkTheme
}

const Text = styled.p<IP>
`
    opacity: ${props => props.opacity || '1'};
    height: ${props => props.height || 'auto'};
    font-size: ${props => props.fontSize ? props.fontSize : font.globalSize || '1rem'};
    font-family: ${props => props.fontFamily ? props.fontFamily : font.fontFamily || 'inherit'};
    font-weight: ${props => props.fontWeight || 'bold'};
    color: ${props => props.color || props.theme.color || 'inherit'};
    text-align: ${props => props.textAlign || 'left'};
    margin: ${props => props.margin || '0'};
    display: ${props => props.display || 'block'};
    letter-spacing: ${props => props.letterSpacing || '0px'};
    overflow: ${props => props.overflow || 'visible'};
    white-space: ${props => props.whiteSpace || 'normal'};
    text-shadow: ${props => props.textShadow || 'none'};
`

function Pp(props: IP, ref: React.Ref<HTMLDivElement>) {
    const { theme } = useTheme()
    return <Text ref={ref} {...props} theme={theme}>{props.children}</Text>
}

const P = React.forwardRef(Pp)
export default P