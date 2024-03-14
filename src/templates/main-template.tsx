import Button from "../components/button";
import Image from "../components/image";
import useTheme from "../context/theme/theme-context";
import { IChildren } from "../interfaces/children-interface";
import styled from "@emotion/styled";

const Template = styled.div
`
    width: 100%;
    height: 100vh;
`

export default function MainTemplate({ children }: IChildren) {
    const { isDarkMode, changeTheme } = useTheme()
    const src = isDarkMode ?
        import.meta.env.VITE_MOON_ICON :
        import.meta.env.VITE_SUN_ICON

    return (
        <Template>
            <Button
                position="absolute"
                top="2%"
                right="2%"
                onClick={changeTheme}
                cursor="pointer"
                zIndex="999"
                backgroundColor="transparent"
                borderRadius="50%"
                >
                <Image 
                    src={src}
                    width="4vw"
                    cursor="pointer"
                />
            </Button>
            {children}
        </Template>
    )
}