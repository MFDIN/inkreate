import styled from "@emotion/styled";

interface IImage {
    width?: string,
    height?: string,
    margin?: string,
    padding?: string,
    border?: string,
    borderRadius?: string,
    boxShadow?: string,
    cursor?: string,
    objectFit?: string,
    objectPosition?: string,
    src?: string,
}

const Img = styled.img<IImage>
`
    width: ${props => props.width || 'auto'};
    height: ${props => props.height || 'auto'};
    margin: ${props => props.margin || '0px'};
    padding: ${props => props.padding || '0px'};
    border: ${props => props.border || 'none'};
    border-radius: ${props => props.borderRadius || 'none'};
    box-shadow: ${props => props.boxShadow || 'none'};
    cursor: ${props => props.cursor || 'auto'};
    object-fit: ${props => props.objectFit || 'cover'};
    object-position: ${props => props.objectPosition || 'center'};
`

export default function Image(props: IImage) {
    return <Img {...props} src={props.src} />
}