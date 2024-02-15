import { Container, SpacedContainer } from "../../components/Container/Style"
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
                <InfoInput editable={false} />
                <MiddleTitle>CPF</MiddleTitle>
                <InfoInput editable={false} keyboardType="numeric" />
                <MiddleTitle>Endereço</MiddleTitle>
                <InfoInput editable={false} />
                <SpacedContainer>
                    <Container>
                        <MiddleTitle>Cep</MiddleTitle>
                        <LittleInfoInput editable={false} keyboardType="numeric" />
                    </Container>
                    <Container>
                        <MiddleTitle>Cidade</MiddleTitle>
                        <LittleInfoInput editable={false} />
                    </Container>
                </SpacedContainer>
                <Button>
                    <ButtonTitle>Salvar</ButtonTitle>
                </Button>
                <Button>
                    <ButtonTitle>Editar</ButtonTitle>
                </Button>
            </Container>
        </ScrollView>
    )
}