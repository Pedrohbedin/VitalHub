import { ScrollView, TextInput } from "react-native";
import { Container, SpacedContainer } from "../../components/Container/Style";
import { PerfilImage } from "../../components/Image/style"
import { InfoInput } from "../../components/Input/style";
import { Subtitle } from "../../components/Subtitle/Subtitle";
import { ButtonTitle, MiddleTitle, Title } from "../../components/Title/style";
import { Button } from "../../components/Button/style";
import { DbLink } from "../../components/Link/style";

export const Prontuario = () => {
    return (
        <ScrollView>
            <Container>
                <PerfilImage source={{ uri: 'https://media.istockphoto.com/id/1226551176/pt/foto/advertisement-concept-side-view-half-face-profile-with-copy-space-of-perfect-smiling-man.jpg?s=612x612&w=0&k=20&c=5Hf34eKWwSFbRKoWfX1GlgxZvjKvURk_Id0PERH2MmE=', }} />
                <Title>Richard Kosta</Title>
                <SpacedContainer>
                    <Subtitle>22 anos</Subtitle>
                    <Subtitle>richard.kosta@gmail.com</Subtitle>
                </SpacedContainer>
                <MiddleTitle>Descrição da consulta</MiddleTitle>
                <InfoInput multiline numberOfLines={5} placeholder="Descrição" style={{ textAlignVertical: 'top' }}></InfoInput>
                <MiddleTitle>Diagnóstico do paciente</MiddleTitle>
                <InfoInput placeholder="Diagnóstico" ></InfoInput>
                <MiddleTitle>Prescrição médica</MiddleTitle>
                <InfoInput multiline numberOfLines={5} placeholder="Prescrição medica" style={{ textAlignVertical: 'top' }}></InfoInput>
                <Button>
                    <ButtonTitle>Salvar</ButtonTitle>
                </Button>
                <DbLink>Cancelar</DbLink>
            </Container>
        </ScrollView>
    )
}