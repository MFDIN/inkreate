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
    menus?: string[]
    onClick?: (value: string) => void
}

export default function ToggleButton(props: IToggleButton) {
    const { theme } = useTheme()
    const [activeIdx, setActiveIdx] = useState(0)

    function onBtnClicked(index: number, value: string) {
        setActiveIdx(index)
        props.onClick && props.onClick(value)
    }

    return (
        <HContainer {...props}
            onClick={() => {}}
            justifyContent='space-between' 
            cursor='pointer'
            backgroundColor={theme.containerBgColor}
            borderRadius='24px'>

            {props.menus?.map((menu, index) => (                
                <Button
                    key={index}
                    backgroundColor={activeIdx === index ? theme.buttonColor : theme.containerBgColor}
                    hoverBackgroundColor={activeIdx === index ? theme.hoverActiveBtnColor : theme.hoverInactiveBtnColor}
                    color={activeIdx === index ? theme.activeColor : theme.color}
                    hoverColor={activeIdx === index ? theme.hoverActiveColor : theme.hoverInactiveColor}
                    boxSizing='border-box'
                    width='50%'
                    padding={props.btnPadding}
                    borderRadius='24px'
                    onClick={() => onBtnClicked(index, menu)}
                    fontWeight='bold'
                    transition='background-color 0.3s ease-in-out'>
                    {menu}
                </Button>
            ))}

        </HContainer>
    )
}