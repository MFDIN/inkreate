import { useState } from 'react';
import useTheme from '../context/theme/theme-context';
import HContainer from '../layout/h-container';
import Button from '../components/button';

interface IToggleButton {
    // Untuk Container
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
    
    cursor?: string,
    
    position?: string,
    top?: string,
    bottom?: string,
    left?: string,
    right?: string,
    zIndex?: string,

    // Untuk Button
    btnWidth?: string,
    btnPadding?: string,
    btnBorderRadius?: string

    // Value
    texts?: string[]
}

export default function ToggleButton(props: IToggleButton) {
    const { theme } = useTheme()
    const [activeIdx, setActiveIdx] = useState(0)

    function onBtnClicked(index: number) {
        setActiveIdx(index)
    }

    return (
        <HContainer {...props} 
            justifyContent='space-between' 
            cursor='pointer'
            backgroundColor={theme.btnBgColor}>

            {props.texts?.map((text, index) => (
                <Button
                key={index}
                backgroundColor={activeIdx === index ? theme.activeBtnBgColor : theme.btnBgColor}
                color={activeIdx === index ? theme.activeColor : theme.color}
                boxSizing='border-box'
                width='50%'
                padding={props.btnPadding}
                borderRadius='24px'
                onClick={() => onBtnClicked(index)}
                transition={activeIdx === index ? 'background-color 0.3s ease-in-out' : 'none'}>
                    {text}
                </Button>
            ))}

        </HContainer>
    )
}