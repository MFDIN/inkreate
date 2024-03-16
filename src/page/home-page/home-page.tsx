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
import { useEffect, useRef, useState } from "react";
import useTheme from "../../context/theme/theme-context";
import { getInput } from "../../controller/input-controller";
import { Image as I } from "../../components/image";

export default function HomePage() {
    const { theme } = useTheme()
    const inputRef = useRef<HTMLInputElement>(null)
    const PRef = useRef<HTMLParagraphElement>(null)
    const conRef = useRef<HTMLDivElement>(null)
    const imgRef = useRef<HTMLDivElement>(null)

    const [value, setValue] = useState("")
    const bgImage = import.meta.env.VITE_BACKGROUND_HEADER
    const path = import.meta.env.VITE_FONT_PATH

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
                margin="4% 0px">
                <P fontWeight="inherit" textShadow={theme.textShadow}>{text.tips}</P>
            </VContainer>
        )
    }

    function DownloadBtn() {
        const { fontSize, letterSpacing } = useFont()
        const [isDownloading, setIsDownloading] = useState(false)

        async function createImgBitMap(path: string) {
            const imgResponse = await fetch(path)
            const imgBlob = await imgResponse.blob()
            return await createImageBitmap(imgBlob)
        }

        async function drawImage() {
            // Drawing The Background
            const canvas = document.createElement("canvas")
            const ctx = canvas.getContext("2d")
            const image = await createImgBitMap(bgImage)

            canvas.width = image.width
            canvas.height = image.height

            ctx?.drawImage(image, 0, 0)

            // Drawing the Letter
            const letters: Array<string | HTMLImageElement> = []
            let letterWidth = 0

            const padding = parseFloat(letterSpacing) * 3
            const size = parseFloat(fontSize)
            
            const scale = size * 20

            value.split(`${String.fromCharCode(219)}`).map((v) => {
                if(v === " ") {
                    letters.push(" ")
                    letterWidth += 10
                }

                else {
                    const image = new Image()
                    image.src = `${path}${v}.svg`
                    letters.push(image)
                    letterWidth += scale + padding
                }
            })

            let x = (canvas.width - letterWidth) / 2 - 24

            for(let i = 0; i < letters.length; i++) {
                const y = (canvas.height - scale) / 2

                if(typeof letters[i] === "string") {
                    x += 10
                }

                else {
                    ctx?.drawImage(letters[i] as HTMLImageElement, x, y, scale, scale)
                    x += scale + padding
                }
            }

            canvas.toBlob(blob => {
                if(blob) {
                    const imageUrl = URL.createObjectURL(blob)
                    const link = document.createElement("a")
                    
                    link.href = imageUrl
                    link.download = "kreation.png"
                    link.click()

                    URL.revokeObjectURL(imageUrl)
                }
            }, "image/png")
        }

        async function onClick() {
            setIsDownloading(true)
            await drawImage()
            setIsDownloading(false)
        }

        return (
            <Button
                padding="1% 2%"
                borderRadius="1vw"
                transition="background-color 0.3s ease-in-out"
                hoverBackgroundColor={isDownloading ? theme.inactiveBtnColor : theme.hoverActiveBtnColor}
                backgroundColor={isDownloading ? theme.inactiveBtnColor : theme.buttonColor}
                onClick={onClick}
                fontWeight="bold"
                boxShadow={theme.boxShadow}
                disabled={isDownloading ? true : false}
                margin="4% 0% 0% 0%"
            >
                {isDownloading ? text.downloading : text.download}
            </Button>
        )
    }
    
    function TextInput() {      
        const { letterSpacing, fontSize } = useFont()
        
        useEffect(() => {
            inputRef.current?.focus()
        }, [value])

        function onKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
            getInput(e, value, setValue, imgRef)
        }

        function onContainerClick() {
            inputRef.current?.focus()
            
            if(imgRef.current)
                imgRef.current.style.backgroundColor = "transparent"
        }

        return (
            <HContainer
                ref={conRef}
                width="80%"
                justifyContent="center"
                alignItems="center"
                backgroundImage={bgImage}
                backgroundSize="100% 100%"
                margin="4% 0px"
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
                    onKeyDown={onKeyDown}
                    value=""
                    onChange={() => {}}
                />

                <HContainer
                    ref={PRef}
                    padding="16.165% 0px"
                    cursor="text"
                    >
                    
                    <HContainer
                        ref={imgRef}
                        textAlign="center"
                        overflow="hidden"
                        whiteSpace="nowrap"
                        >
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
                                    <I
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
            </HContainer>
        )
    }

    function TypographyControls() {
        return (
            <HContainer
                gap="4vw"
                alignItems="top"
                marginTop = "4vw"
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
            <VContainer 
            >
                <P textShadow={theme.textShadow}>Spacing</P>
                <Slider
                    width="24vw"
                    height="48%"
                    tHeight="0%"
                    tWidth="0%"
                    tPadding="3.5%"
                    margin="6% 1.5vw"
                    borderRadius="24px"
                    marginTop="-1.5%"
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
            <VContainer>
                <P textShadow={theme.textShadow}>Size</P>
                <ToggleButton
                    marginTop="6%"
                    menus={menus}
                    btnPadding="2.4%"
                    borderRadius="50%"
                    btnBorderRadius="50%"
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
                <I 
                    src={import.meta.env.VITE_LOGO_PATH} 
                    width="24vw"/>
                <P 
                    fontSize="2vw"
                    textShadow={theme.textShadow}>
                    {text.by}
                </P>
            </VContainer>
        )
    }
}