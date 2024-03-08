import styled from '@emotion/styled'
import { darkTheme, lightTheme } from '../settings/themes'
import useTheme  from '../context/theme/theme-context.tsx'

interface IP {
    fontSize?: string,
    fontFamily?: string,
    fontWeight?: string,
    color?: string,
    textAlign?: string,
    margin?: string

    // Children
    children?: React.ReactNode
    theme?: typeof lightTheme | typeof darkTheme
}

const Text = styled.p<IP>
`
    font-size: ${props => props.fontSize || '1rem'};
    font-family: ${props => props.fontFamily || 'inherit'};
    font-weight: ${props => props.fontWeight || 'inherit'};
    color: ${props => props.color || props.theme.color || 'inherit'};
    text-align: ${props => props.textAlign || 'left'};
    margin: ${props => props.margin || '0'};
`

export default function P(props: IP) {
    const { theme } = useTheme()
    return <Text {...props} theme={theme}>{props.children}</Text>
}