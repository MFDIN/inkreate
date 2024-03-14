import Button from "../../components/button";
import P from "../../components/p";
import Container from "../../layout/container";
import HContainer from "../../layout/h-container";
import VContainer from "../../layout/v-container";
import { text } from "../../settings/text";
import ToggleButton from "../../components/toggle-button";
import Slider from "../../components/slider";
import Input from "../../components/input";
import { font } from "../../settings/font";
import useFont from "../../context/font/font-context";
import { useRef, useState } from "react";
import useTheme from "../../context/theme/theme-context";
import html2canvas from "html2canvas";
import { getInput } from "../../controller/input-controller";
import Image from "../../components/image";

export default function HomePage() {
    const { theme } = useTheme()
    const inputRef = useRef<HTMLInputElement>(null)
    const PRef = useRef<HTMLParagraphElement>(null)
    const conRef = useRef<HTMLDivElement>(null)

    return (
        <Container padding="0px 0px">
            <HeaderComponent />
            {/* <TypeToggleBtn /> */}

            <TypographyControls />
            <TextInput />

            <DownloadBtn />
            <FooterMessage />
        </Container>
    )

    // Components
    function FooterMessage() {
        return (
            <VContainer
                justifyContent="center"
                alignItems="center"
                gap="24px"
                margin="20px 0px">
                <P fontWeight="inherit" textShadow={theme.textShadow}>{text.tips}</P>
            </VContainer>
        )
    }

    function DownloadBtn() {
        const { theme } = useTheme()
        const [isDownloading, setIsDownloading] = useState(false)

        function onClick() {
            setIsDownloading(true)

            setTimeout(() => {
                if(inputRef.current && PRef.current) {
                    setTimeout(async () => {
                        if(conRef.current) {
                            await html2canvas(conRef.current, {useCORS: true, scale: 2})
                            .then((canvas) => {
                                const imgData = canvas.toDataURL("image/png")
                                const link = document.createElement("a")
                                link.href = imgData
                                link.download = "kreation.png"
                                link.click()
                            }).then(() => setIsDownloading(false))
                            .catch(() => setIsDownloading(false))
                        }
                    }, 100)
                }
            }, 500)
        }

        return (
            <Button
                padding="8px 16px"
                borderRadius="8px"
                transition="background-color 0.3s ease-in-out"
                hoverBackgroundColor={isDownloading ? theme.inactiveBtnColor : theme.hoverActiveBtnColor}
                backgroundColor={isDownloading ? theme.inactiveBtnColor : theme.buttonColor}
                onClick={onClick}
                fontWeight="bold"
                boxShadow={theme.boxShadow}
                disabled={isDownloading ? true : false}
            >
                {isDownloading ? text.downloading : text.download}
            </Button>
        )
    }

    function TextInput() {
        const bgImage = import.meta.env.VITE_BACKGROUND_HEADER
        const { letterSpacing, fontSize } = useFont()
        const [value, setValue] = useState("")
        const path = import.meta.env.VITE_FONT_PATH

        function onKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
            getInput(e, value, setValue, PRef)
        }

        function onContainerClick() {
            inputRef.current?.focus()
        }

        return (
            <HContainer
                ref={conRef}
                width="750px"
                height="250px"
                justifyContent="center"
                alignItems="center"
                backgroundImage={bgImage}
                backgroundSize="contain"
                margin="64px 0px"
                boxShadow={theme.boxShadow}
                onClick={onContainerClick}
                cursor="text"
                >
                <Input
                    ref={inputRef}
                    position="absolute"
                    left="-9999px"
                    backgroundColor="transparent"
                    justifyContent="center"
                    alignItems="center"
                    textAlign="center"
                    placeholder="Realize Kreation Here"
                    fontWeight="bold"
                    display="block"
                    onKeyUp={onKeyDown}
                    // onKeyDown={onKeyDown}
                    value=""
                    onChange={() => {}}
                />
                <HContainer
                    ref={PRef}
                    textAlign="center"
                    padding="2px 0px"
                    overflow="hidden"
                    whiteSpace="nowrap">
                    {value === "" && 
                        <P
                            fontSize={fontSize}
                            color="#808080"
                            letterSpacing={letterSpacing}
                            whiteSpace="nowrap"
                        >
                            {text.kreation}
                        </P>
                    }

                    {value.split(`${String.fromCharCode(219)}`).map((v, index) => (
                        <div key={index}>
                            {v === " " ? 
                            (<P opacity="0">s</P>)
                            : 
                            (
                                <Image
                                    src={`${path}${v}.svg`} 
                                    width={fontSize}
                                    cursor="text"
                                    padding={`0px ${letterSpacing}`}
                                />
                            )}
                        </div>
                    ))}
                </HContainer>
            </HContainer>
        )
    }

    function TypographyControls() {
        return (
            <HContainer
                gap="32px"
                alignItems="top"
                marginTop = "32px"
            >
                <SizeToggleBtn />
                <SpacingSlider />
            </HContainer>
        )
    }
    
    function SpacingSlider() {
        const [value, setValue] = useState(0)
        const { changeLetterSpacing } = useFont() 
        const min = 1
        const max = 112
        const step = 1

        function onChange(e: React.ChangeEvent<HTMLInputElement>) {
            const newValue = parseInt(e.target.value)
            setValue(newValue)
            changeLetterSpacing(newValue)
        }

        return (
            <VContainer gap="20px" height="auto">
                <P textShadow={theme.textShadow}>Spacing</P>
                <Slider
                    width="224px"
                    tHeight="20px"
                    height="6px"
                    borderRadius="24px"
                    marginTop="-6px"
                    min={min}
                    max={max}
                    step={step}
                    value={value}
                    onChange={onChange}
                />
            </VContainer>
        )
    }
    
    function SizeToggleBtn() {
        const { changeFontSize } = useFont()
        const menus = [
            'XS', 'SM', 'MD', 'LG', 'XL'
        ]

        function onClick(value: string) {
            if(value in font.fontSize) changeFontSize(value)
        }
        
        return (
            <VContainer gap="8px">
                <P textShadow={theme.textShadow}>Size</P>
                <ToggleButton
                    menus={menus}
                    btnPadding="8px 16px"
                    borderRadius="24px"
                    btnBorderRadius="24px"
                    boxShadow="0px 0px 2px 0px rgba(0, 0, 0, 0.1)"
                    onClick={onClick}
                />
            </VContainer>
        )
    }

    // function TypeToggleBtn() {
    //     const menus = [
    //         text.alphabet, text.pfp
    //     ]

    //     return (
    //         <ToggleButton
    //             menus={menus}
    //             marginTop="16px"
    //             borderRadius="24px"
    //             btnBorderRadius="24px"
    //             btnPadding="10px 48px"
    //             boxShadow="0px 0px 2px 0px rgba(0, 0, 0, 0.1)"
    //         />
    //     )
    // }

    function HeaderComponent() {
        return (
            <VContainer alignItems="center" justifyContent="center" gap="4px">
                <Image 
                    src={import.meta.env.VITE_LOGO_PATH} 
                    width="296px"/>
                <P 
                    fontSize="20px"
                    textShadow={theme.textShadow}>
                    {text.by}
                </P>
            </VContainer>
        )
    }
}