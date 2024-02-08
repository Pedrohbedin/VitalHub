import { CodeContainer, Container, InfoContainer } from "../../components/Container/Style"
import { InfoInput, LittleInfoInput } from "../../components/Input/style"
import { PerfilForm } from "../../components/PerfilForm/style"
import { PerfilImage } from "../../components/PerfilImage/style"
import { Subtitle } from "../../components/Subtitle/Subtitle"
import { PerfilTitle, Title } from "../../components/Title/style"

export const Perfil = () => {
    return (
        <Container>
            <PerfilImage source={{ uri: 'https://media.istockphoto.com/id/1226551176/pt/foto/advertisement-concept-side-view-half-face-profile-with-copy-space-of-perfect-smiling-man.jpg?s=612x612&w=0&k=20&c=5Hf34eKWwSFbRKoWfX1GlgxZvjKvURk_Id0PERH2MmE=', }} />

            <PerfilForm>
                <Title>Richard Kosta</Title>
                <Subtitle>richard.kosta@gmail.com</Subtitle>
            </PerfilForm>

            <PerfilTitle>Data de nascimento</PerfilTitle>
            <InfoInput />
            <PerfilTitle>CPF</PerfilTitle>
            <InfoInput />
            <PerfilTitle>Endereço</PerfilTitle>
            <InfoInput />
            <InfoContainer>
                <Container>
                    <PerfilTitle>Cep</PerfilTitle>
                    <LittleInfoInput />
                </Container>
                <Container>
                    <PerfilTitle>Cidade</PerfilTitle>
                    <LittleInfoInput />
                </Container>
            </InfoContainer>
        </Container>
    )
}