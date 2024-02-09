import { Container } from "../../components/Container/Style";
import { Title, ButtonTitle, BorderedButtonTitle } from "../../components/Title/style";
import { LogoVitalHub } from "../../components/Logo";
import { Input } from "../../components/Input/style";
import { GrayLink, LbLink } from "../../components/Link/style";
import { useNavigation } from "@react-navigation/native";
import { Button, BorderedButton } from "../../components/Button/style";
import { Icon } from "react-native-elements"
import { ContentAccount } from "../../components/ContentAccount/style";
import { MonAlt_Sb } from "../../components/Text/style";

export const Login = () => {

    const navigation = useNavigation();

    const Recuperar = () => {

        navigation.navigate('RecoverPassword');
    }

    const Cadastrar = () => {

        navigation.navigate('Singup');
    }

    return (
        <Container>
            <LogoVitalHub />
            <Title>Entrar ou criar conta</Title>

            <Input placeholder="Usuário ou E-mail" placeholderTextColor="#49B3BA" />
            <Input placeholder="Senha" placeholderTextColor="#49B3BA" />

            <GrayLink
                onPress={Recuperar}>Esqueceu sua senha?</GrayLink>

            <Button>
                <ButtonTitle>Entrar</ButtonTitle>
            </Button>

            <BorderedButton>
                <Icon
                    color="#496BBA"
                    size={24}
                    name='google'
                    type="antdesign"
                />
                <BorderedButtonTitle>Entrar com Google</BorderedButtonTitle>
            </BorderedButton>

            <ContentAccount>
                <MonAlt_Sb>Não tem conta? <LbLink onPress={Cadastrar}>Crie uma conta agora!</LbLink></MonAlt_Sb>
            </ContentAccount>
        </Container>
    )
}