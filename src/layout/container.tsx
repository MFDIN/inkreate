import styled from "@emotion/styled";
import useTheme from '../context/theme/theme-context.tsx';
import { darkTheme, lightTheme } from "../settings/themes";

interface IContainer {
    padding?: string,
    children?: React.ReactNode
    theme?: typeof lightTheme | typeof darkTheme
}

const Cont = styled.div<IContainer>`
    display: flex;
    flex-direction: column;
    align-items: center;

    padding: ${props => props.padding || '0px'};

    width: 100%;
    height: auto;
    background-color: ${props => props.theme.backgroundColor};
    transition: background-color 1s ease;
`

export default function Container(props: IContainer) {
    const { theme } = useTheme();
    return <Cont {...props} theme={theme}>{ props.children }</Cont>
}