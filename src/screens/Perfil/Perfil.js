import { Container, InfoContainer } from "../../components/Container/Style"
import { InfoInput, LittleInfoInput } from "../../components/Input/style"
import { PerfilForm } from "../../components/Form/style"
import { PerfilImage } from "../../components/Image/style"
import { Subtitle } from "../../components/Subtitle/Subtitle"
import { ButtonTitle, MiddleTitle, Title } from "../../components/Title/style"
import { Button } from "../../components/Button/style"
import { ScrollView } from "react-native"

export const Perfil = () => {
    return (
        <ScrollView>
            <Container>
                <PerfilImage source={{ uri: 'https://media.istockphoto.com/id/1226551176/pt/foto/advertisement-concept-side-view-half-face-profile-with-copy-space-of-perfect-smiling-man.jpg?s=612x612&w=0&k=20&c=5Hf34eKWwSFbRKoWfX1GlgxZvjKvURk_Id0PERH2MmE=', }} />

                <PerfilForm>
                    <Title>Richard Kosta</Title>
                    <Subtitle>richard.kosta@gmail.com</Subtitle>
                </PerfilForm>

                <MiddleTitle>Data de nascimento</MiddleTitle>
                <InfoInput />
                <MiddleTitle>CPF</MiddleTitle>
                <InfoInput />
                <MiddleTitle>Endereço</MiddleTitle>
                <InfoInput />
                <InfoContainer>
                    <Container>
                        <MiddleTitle>Cep</MiddleTitle>
                        <LittleInfoInput />
                    </Container>
                    <Container>
                        <MiddleTitle>Cidade</MiddleTitle>
                        <LittleInfoInput />
                    </Container>
                </InfoContainer>
                <Button>
                    <ButtonTitle>Salvar</ButtonTitle>
                </Button>
            </Container>
        </ScrollView>
    )
}