import { Container } from "../../components/Container/Style";
import { Title, ButtonTitle, ButtonTitleGoogle } from "../../components/Title/style";
import { LogoVitalHub } from "../../components/Logo";
import { Input } from "../../components/Input/style";
import { LinkAccount, LinkMedium } from "../../components/Link/style";
import { useNavigation } from "@react-navigation/native";
import { Button, ButtonGoogle } from "../../components/Button/style";
import { Icon } from "react-native-elements"
import { ContentAccount } from "../../components/ContentAccount/style";
import { TextAccount } from "../../components/TextAccount/style";

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

            <LinkMedium
                onPress={Recuperar}>Esqueceu sua senha?</LinkMedium>

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
                <TextAccount>Não tem conta? <LinkAccount onPress={Cadastrar}>Crie uma conta agora!</LinkAccount></TextAccount>
            </ContentAccount>
        </Container>
    )
}