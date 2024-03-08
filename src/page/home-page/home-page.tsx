import Button from "../../components/button";
import P from "../../components/p";
import Container from "../../layout/container";
import HContainer from "../../layout/h-container";
import VContainer from "../../layout/v-container";
import { text } from "../../settings/text";
import HPageToggleBtn from "./components/toggle-button";
import ToggleButton from "../../components/toggle-button";

export default function HomePage() {

    return (
        <Container padding="16px 0px">
            <HeaderComponent />
            <TypeToggleBtn />

            <HContainer>
                <SizeToggleBtn />
                <SpacingSpinner />
            </HContainer>

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
                marginTop="8px">
                <P>{text.tips}</P>
                <P>{text.copyright}</P>
            </VContainer>
        )
    }

    function DownloadBtn() {
        return (
            <Button
                marginTop="16px"
                padding="8px 16px"
                borderRadius="8px"
            >
                {text.download}
            </Button>
        )
    }
    
    function SpacingSpinner() {
        return (
            <VContainer>
                
            </VContainer>
        )
    }
    
    function SizeToggleBtn() {
        const texts = [
            'XS', 'SM', 'MD', 'LG', 'XL'
        ]

        return (
            <VContainer>
                <ToggleButton
                    texts={texts}
                    btnPadding="8px 16px"
                    btnBorderRadius="24px"
                    gap="8px"
                />
            </VContainer>
        )
    }

    function TypeToggleBtn() {
        return (
            <HPageToggleBtn
                marginTop="16px"
                borderRadius="24px"
                btnBorderRadius="24px"
                btnPadding="10px 48px"
            />
        )
    }

    function HeaderComponent() {
        return (
            <VContainer alignItems="center" justifyContent="center" gap="4px">
                <P>{text.app}</P>
                <P>{text.by}</P>
            </VContainer>
        )
    }
}