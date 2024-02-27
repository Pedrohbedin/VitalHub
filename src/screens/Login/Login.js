import { Container } from "../../components/Container/Style";
import { Title, ButtonTitle, BorderedButtonTitle } from "../../components/Title/style";
import { LogoVitalHub } from "../../components/Logo";
import { Input } from "../../components/Input/style";
import { GrayLink, LbLink } from "../../components/Link/style";
import { useNavigation } from "@react-navigation/native";
import { Button, BorderedButton } from "../../components/Button/style";
import { Icon } from "react-native-elements"
import { Text } from "../../components/Text/style";

export const Login = () => {

    const navigation = useNavigation();

    const Recuperar = () => {

        navigation.navigate('EsqueceuSenha');
    }

    const Entrar = () => {

        navigation.navigate('Main');
    }

    const Cadastrar = () => {

        navigation.navigate('Cadastrar');
    }

    return (
        <Container>
            <LogoVitalHub />
            <Title>Entrar ou criar conta</Title>

            <Input placeholder="Usuário ou E-mail" placeholderTextColor="#49B3BA" />
            <Input placeholder="Senha" placeholderTextColor="#49B3BA" />

            <GrayLink
                onPress={Recuperar}>Esqueceu sua senha?</GrayLink>

            <Button onPress={Entrar}> 
                <ButtonTitle colorText="#FFFFFF">Entrar</ButtonTitle>
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

            <Text margin="20px 0px" fontSize="14px" fontFamily="MontserratAlternates_600SemiBold">Não tem conta? <LbLink onPress={Cadastrar}>Crie uma conta agora!</LbLink></Text>

        </Container>
    )
}