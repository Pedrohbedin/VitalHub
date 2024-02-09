import { Button } from "../../components/Button/style"
import { Container } from "../../components/Container/Style"
import { Input } from "../../components/Input/style"
import { DbLink } from "../../components/Link/style"
import { LogoVitalHub } from "../../components/Logo"
import { Subtitle } from "../../components/Subtitle/Subtitle"
import { ButtonTitle, Title } from "../../components/Title/style"
import { useNavigation } from "@react-navigation/native"

export const Cadastrar = () => {

    const navigation = useNavigation();
    
    return (
        <Container>
            <LogoVitalHub />

            <Title>Criar conta</Title>

            <Subtitle>Insira seu endereço de e-mail e senha para realizar seu cadastro.</Subtitle>

            <Input placeholder="Usuário ou E-mail" placeholderTextColor="#49B3BA" />
            <Input placeholder="Senha" placeholderTextColor="#49B3BA" />
            <Input placeholder="Confirmar Senha" placeholderTextColor="#49B3BA" />

            <Button>
                <ButtonTitle>CADASTRAR</ButtonTitle>
            </Button>
            <DbLink onPress={() => navigation.navigate("Login")}>Cancelar</DbLink>
        </Container>
    )
}