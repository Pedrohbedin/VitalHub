import { Container } from "../../components/Container/Style";
import { Title, ButtonTitle, BorderedButtonTitle } from "../../components/Title/style";
import { LogoVitalHub } from "../../components/Logo";
import { Input } from "../../components/Input/style";
import { GrayLink, LbLink } from "../../components/Link/style";
import { Button, BorderedButton } from "../../components/Button/style";
import { Icon } from "react-native-elements"
import { Text } from "../../components/Text/style";

export function Login({ navigation }) {
    return (
        <Container>
            <LogoVitalHub />
            <Title>Entrar ou criar conta</Title>

            <Input placeholder="Usuário ou E-mail" placeholderTextColor="#49B3BA" />
            <Input placeholder="Senha" placeholderTextColor="#49B3BA" />

            <GrayLink
                onPress={() => navigation.navigate('EsqueceuSenha')}>Esqueceu sua senha?</GrayLink>

            <Button onPress={() => navigation.navigate('Main')}>
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

            <Text margin="20px 0px" fontSize="14px" fontFamily="MontserratAlternates_600SemiBold">Não tem conta? <LbLink onPress={() => navigation.navigate('Cadastrar')}>Crie uma conta agora!</LbLink></Text>

        </Container >
    )
}