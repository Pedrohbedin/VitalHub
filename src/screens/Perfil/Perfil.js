import { Container, SpacedContainer } from "../../components/Container/Style"
import { InfoInput, LittleInfoInput } from "../../components/Input/style"
import { PerfilForm } from "../../components/Form/style"
import { PerfilImage } from "../../components/Image/style"
import { ButtonTitle, MiddleTitle, Title } from "../../components/Title/style"
import { Button } from "../../components/Button/style"
import { ScrollView } from "react-native"
import { Text } from "../../components/Text/style"

export function Perfil() {
    return (
        <ScrollView>
            <Container>
                <PerfilImage source={{ uri: 'https://media.istockphoto.com/id/1226551176/pt/foto/advertisement-concept-side-view-half-face-profile-with-copy-space-of-perfect-smiling-man.jpg?s=612x612&w=0&k=20&c=5Hf34eKWwSFbRKoWfX1GlgxZvjKvURk_Id0PERH2MmE=', }} />

                <PerfilForm>
                    <Title>Richard Kosta</Title>
                    <Text>richard.kosta@gmail.com</Text>
                </PerfilForm>

                <MiddleTitle textAlign="left">Data de nascimento</MiddleTitle>
                <InfoInput editable={false} />
                <MiddleTitle textAlign="left">CPF</MiddleTitle>
                <InfoInput editable={false} keyboardType="numeric" />
                <MiddleTitle textAlign="left">Endereço</MiddleTitle>
                <InfoInput editable={false} />
                <SpacedContainer>
                    <Container>
                        <MiddleTitle textAlign="left">Cep</MiddleTitle>
                        <LittleInfoInput editable={false} keyboardType="numeric" />
                    </Container>
                    <Container>
                        <MiddleTitle textAlign="left">Cidade</MiddleTitle>
                        <LittleInfoInput editable={false} />
                    </Container>
                </SpacedContainer>
                <Button>
                    <ButtonTitle colorText="#FFFFFF">Salvar</ButtonTitle>
                </Button>
                <Button>
                    <ButtonTitle colorText="#FFFFFF">Editar</ButtonTitle>
                </Button>
            </Container>
        </ScrollView>
    )
}