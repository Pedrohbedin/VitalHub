import { Icon } from "react-native-elements"
import { SpacedContainer, Container } from "../../components/Container/Style"
import { Button, FuncButton } from "../../components/Button/style"
import { LogoVitalHub } from "../../components/Logo"
import { ButtonTitle, Title } from "../../components/Title/style"
import { Email, Subtitle } from "../../components/Subtitle/Subtitle"
import { CodeInput } from "../../components/Input/style"
import { useNavigation } from "@react-navigation/native"
import { DbLink } from "../../components/Link/style"

export const CodigoEmail = () => {

    const navigation = useNavigation()
    const onPress = () => {

        navigation.navigate('RecoverPassword');
    }

    return (
        <Container>
            <FuncButton onPress={onPress}>
                <Icon
                    color="#34898F"
                    size={30}
                    name='close'
                    type="antdesign"
                />
            </FuncButton>
            <LogoVitalHub />
            <Title>Verifique seu e-mail</Title>
            <Subtitle>Digite o código de 4 dígitos enviado para
                <Email> username@email.com</Email></Subtitle>
            <SpacedContainer>
                <CodeInput maxLength={1} placeholder="0" placeholderTextColor="#34898F" />
                <CodeInput maxLength={1} placeholder="0" placeholderTextColor="#34898F" />
                <CodeInput maxLength={1} placeholder="0" placeholderTextColor="#34898F" />
                <CodeInput maxLength={1} placeholder="0" placeholderTextColor="#34898F" />
            </SpacedContainer>
            <Button>
                <ButtonTitle>Entrar</ButtonTitle>
            </Button>
            <DbLink>Reenviar Código</DbLink>
        </Container>
    )
}