import { useState } from 'react';
import useTheme from '../../../context/theme/theme-context'
import HContainer from '../../../layout/h-container'
import { text } from '../../../settings/text';
import Button from '../../../components/button';

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
}

export default function HPageToggleBtn(props: IToggleButton) {
    const { theme } = useTheme()
    const [active, setActive] = useState(true);

    function onAlphabetBtnClicked() {
        setActive(true)
    }

    function onPfpBtnClicked() {
        setActive(false)
    }

    return (
        <HContainer {...props} 
            justifyContent='space-between' 
            cursor='pointer'
            backgroundColor={theme.btnBgColor}
        >
            
            <Button
                    backgroundColor={active ? theme.activeBtnBgColor : theme.btnBgColor}
                    color={active ? theme.activeColor : theme.color}
                    boxSizing='border-box'
                    width='50%'
                    padding={props.btnPadding}
                    borderRadius='24px'
                    onClick={onAlphabetBtnClicked}
                    transition={active ? 'background-color 0.3s ease-in-out' : 'none'}
            >
                {text.alphabet}
            </Button>

            <Button
                    backgroundColor={active ? theme.btnBgColor : theme.activeBtnBgColor}
                    color={active ? theme.color : theme.activeColor}
                    boxSizing='border-box'
                    width='50%'
                    padding={props.btnPadding}
                    borderRadius='24px'
                    onClick={onPfpBtnClicked}
                    transition={active ? 'none' : 'background-color 0.3s ease-in-out'}
                    // disabled={true}
            >
                {text.pfp}
            </Button>
        </HContainer>
    )
}