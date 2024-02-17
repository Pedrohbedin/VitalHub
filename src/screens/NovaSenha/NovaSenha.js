import { Icon } from "react-native-elements"
import { Button, FuncButton } from "../../components/Button/style"
import { Container } from "../../components/Container/Style"
import { LogoVitalHub } from "../../components/Logo"
import { Input } from "../../components/Input/style"
import { ButtonTitle, Title } from "../../components/Title/style"
import { useNavigation } from "@react-navigation/native"
import { Text } from "../../components/Text/style"

export const NovaSenha = () => {

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
                    name='close'
                    type="antdesign"
                />
            </FuncButton>

            <LogoVitalHub />

            <Title>Redefinir senha</Title>
            <Text>Insira e confirme a sua nova senha</Text>

            <Input placeholder="Nova Senha" placeholderTextColor="#34898F" />
            <Input placeholder="Confirmar nova senha" placeholderTextColor="#34898F" />

            <Button>
                <ButtonTitle colorText="#FFFFFF">Confirmar senha nova</ButtonTitle>
            </Button>
        </Container>
    )
}