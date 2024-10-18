import { Icon } from "react-native-elements"
import { Button, FuncButton } from "../../components/Button/style"
import { Container } from "../../components/Container/Style"
import { LogoVitalHub } from "../../components/Logo"
import { Input } from "../../components/Input/style"
import { ButtonTitle, Title } from "../../components/Title/style"
import { Text } from "../../components/Text/style"

export function NovaSenha({ navigation }) {
    return (
        <Container>
            <FuncButton onPress={() => navigation.navigate("Login")}>
                <Icon
                    color="#34898F"
                    size={30}
                    name='close'
                    type="antdesign"
                />
            </FuncButton>

            <LogoVitalHub />

            <Title>Redefinir senha</Title>
            <Text>Insira e confirme a sua nova senha</Text>

            <Input placeholder="Nova Senha" placeholderTextColor="#34898F" />
            <Input placeholder="Confirmar nova senha" placeholderTextColor="#34898F" />

            <Button onPress={() => navigation.navigate('Login')}>
                <ButtonTitle colorText="#FFFFFF">Confirmar senha nova</ButtonTitle>
            </Button>
        </Container>
    )
}