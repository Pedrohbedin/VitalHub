import { Icon } from "react-native-elements"
import { SpacedContainer, Container } from "../../components/Container/Style"
import { Button, FuncButton } from "../../components/Button/style"
import { LogoVitalHub } from "../../components/Logo"
import { ButtonTitle, Title } from "../../components/Title/style"
import { Text } from "../../components/Text/style"
import { CodeInput } from "../../components/Input/style"
import { DbLink } from "../../components/Link/style"

export function CodigoEmail({ navigation }) {

    return (
        <Container>
            <FuncButton onPress={() => navigation.navigate('Login')}>
                <Icon
                    color="#34898F"
                    size={30}
                    name='close'
                    type="antdesign"
                />
            </FuncButton>
            <LogoVitalHub />
            <Title>Verifique seu e-mail</Title>
            <Text>Digite o código de 4 dígitos enviado para
                <DbLink>username@email.com</DbLink></Text>
            <SpacedContainer>
                <CodeInput maxLength={1} placeholder="0" placeholderTextColor="#34898F" />
                <CodeInput maxLength={1} placeholder="0" placeholderTextColor="#34898F" />
                <CodeInput maxLength={1} placeholder="0" placeholderTextColor="#34898F" />
                <CodeInput maxLength={1} placeholder="0" placeholderTextColor="#34898F" />
            </SpacedContainer>
            <Button onPress={() => navigation.navigate('Main')}>
                <ButtonTitle>Entrar</ButtonTitle>
            </Button>
            <DbLink>Reenviar Código</DbLink>
        </Container >
    )
}