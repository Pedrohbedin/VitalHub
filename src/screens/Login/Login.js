import { Container } from "../../components/Container/Style";
import { useFonts, MontserratAlternates_600SemiBold, MontserratAlternates_500Medium } from '@expo-google-fonts/montserrat-alternates';
import { Title } from "../../components/Title/style";
import { LogoVitalHub } from "../../components/Logo";
import { Input } from "../../components/Input/style";
import { LinkMedium } from "../../components/Link/style";

export const Login = () => {

    let [fontsLoaded, fontError] = useFonts({
        MontserratAlternates_600SemiBold,
        MontserratAlternates_500Medium,
    });

    if (!fontsLoaded && !fontError) {
        return null;
    }

    return (
        <Container>
            <LogoVitalHub />
            <Title>Entrar ou criar conta</Title>

            <Input placeholder="Usuário ou E-mail" placeholderTextColor="#49B3BA" />
            <Input placeholder="Senha" placeholderTextColor="#49B3BA" />

            <LinkMedium>Esqueceu sua senha?</LinkMedium>

            {/* <Button>
                <ButtonTitle>Entrar</ButtonTitle>
            </Button>

            <ButtonGoogle>
                <ButtonTitleGoogle>Entrar com Google</ButtonTitleGoogle>
            </ButtonGoogle>

            <ContentAccount>
                <TextAccount>Não tem conta? Crie uma conta agora!</TextAccount>
            </ContentAccount> */}
        </Container>
    )
}