import { Container } from "../../components/Container/Style";
import { useFonts, MontserratAlternates_600SemiBold, MontserratAlternates_500Medium, MontserratAlternates_700Bold } from '@expo-google-fonts/montserrat-alternates';
import { Title, ButtonTitle, ButtonTitleGoogle } from "../../components/Title/style";
import { LogoVitalHub } from "../../components/Logo";
import { Input } from "../../components/Input/style";
import { LinkMedium } from "../../components/Link/style";
import { Linking } from "react-native";
import { Button, ButtonGoogle } from "../../components/Button/style";
import { Icon } from "react-native-elements"

export const Login = () => {

    let [fontsLoaded, fontError] = useFonts({
        MontserratAlternates_600SemiBold,
        MontserratAlternates_500Medium,
        MontserratAlternates_700Bold,
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

            <LinkMedium
                onPress={() => { Linking.openURL('https://reactnative.dev'); }}>Esqueceu sua senha?</LinkMedium>

            <Button>
                <ButtonTitle>Entrar</ButtonTitle>
            </Button>

            <ButtonGoogle>
                <Icon
                    color="#496BBA"
                    size={24}
                    name='google'
                    type="antdesign"
                />
                <ButtonTitleGoogle>Entrar com Google</ButtonTitleGoogle>
            </ButtonGoogle>

            <ContentAccount>
                <TextAccount>Não tem conta? <Text>Crie uma conta agora!</Text></TextAccount>
            </ContentAccount> 
        </Container>
    )
}