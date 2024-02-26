import { Container } from "../../components/Container/Style"
import { LogoVitalHub } from "../../components/Logo"
import { ButtonTitle, Title } from "../../components/Title/style"
import { Input } from "../../components/Input/style";
import { Button, FuncButton } from "../../components/Button/style";
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { Text } from "../../components/Text/style";

export const EsqueceuSenha = () => {

    const navigation = useNavigation();

    const Continuar = () => {
        navigation.navigate('CodigoEmail')
    }

    return (
        <Container>
            <FuncButton onPress={() => navigation.navigate('Login')}>
                <Icon
                    color="#34898F"
                    size={30}
                    name='arrowleft'
                    type="antdesign"
                />
            </FuncButton>
            <LogoVitalHub />
            <Title>Recuperar senha</Title>
            <Text>Digite abaixo seu email cadastrado que enviaremos um link para recuperação de senha</Text>
            <Input placeholder="Usuário ou E-mail" placeholderTextColor="#49B3BA" />
            <Button onPress={Continuar}>
                <ButtonTitle colorText="#FFFFFF">Continuar</ButtonTitle>
            </Button>
        </Container>
    )
}