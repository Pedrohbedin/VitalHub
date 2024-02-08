import { Container } from "../../components/Container/Style"
import { LogoVitalHub } from "../../components/Logo"
import { ButtonTitle, Title } from "../../components/Title/style"
import { Subtitle } from "../../components/Subtitle/Subtitle";
import { Input } from "../../components/Input/style";
import { Button, FuncButton } from "../../components/Button/style";
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

export const RecoverPassword = () => {

    const navigation = useNavigation();

    const onPress = () => {

        navigation.navigate('Login');
    }

    return (
        <Container>
            <FuncButton onPress={onPress}>
                <Icon
                    color="#34898F"
                    size={30}
                    name='arrowleft'
                    type="antdesign"
                />
            </FuncButton>
            <LogoVitalHub />
            <Title>Recuperar senha</Title>
            <Subtitle>Digite abaixo seu email cadastrado que enviaremos um link para recuperação de senha</Subtitle>
            <Input placeholder="Usuário ou E-mail" placeholderTextColor="#49B3BA" />
            <Button>
                <ButtonTitle>Continuar</ButtonTitle>
            </Button>
        </Container>
    )
}