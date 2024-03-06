import { ScrollView, TextInput } from "react-native";
import { Container, SpacedContainer } from "../../components/Container/Style";
import { PerfilImage } from "../../components/Image/style"
import { InfoInput } from "../../components/Input/style";
import { Text } from "../../components/Text/style";
import { ButtonTitle, MiddleTitle, Title } from "../../components/Title/style";
import { Button } from "../../components/Button/style";
import { DbLink } from "../../components/Link/style";
import { TouchableOpacity } from "react-native";

export function Prontuario({ navigation }) {
    return (
        <ScrollView>
            <Container>
                <PerfilImage source={{ uri: 'https://media.istockphoto.com/id/1226551176/pt/foto/advertisement-concept-side-view-half-face-profile-with-copy-space-of-perfect-smiling-man.jpg?s=612x612&w=0&k=20&c=5Hf34eKWwSFbRKoWfX1GlgxZvjKvURk_Id0PERH2MmE=', }} />
                <Title>Richard Kosta</Title>
                <SpacedContainer style={{ width: "auto", gap: 20 }}>
                    <Text fieldWidth="auto">22 anos</Text>
                    <Text fieldWidth="auto">richard.kosta@gmail.com</Text>
                </SpacedContainer>
                <MiddleTitle>Descrição da consulta</MiddleTitle>
                <InfoInput multiline numberOfLines={5} placeholder="Descrição" style={{ textAlignVertical: 'top' }} />
                <MiddleTitle>Diagnóstico do paciente</MiddleTitle>
                <InfoInput placeholder="Diagnóstico" />
                <MiddleTitle>Prescrição médica</MiddleTitle>
                <InfoInput multiline numberOfLines={5} placeholder="Prescrição medica" style={{ textAlignVertical: 'top' }} />
                <Button>
                    <ButtonTitle>Salvar</ButtonTitle>
                </Button>
                <Button>
                    <ButtonTitle>Editar</ButtonTitle>
                </Button>
                <TouchableOpacity onPress={() => navigation.navigate('Main')}>
                    <DbLink>Cancelar</DbLink>
                </TouchableOpacity>
            </Container>
        </ScrollView>
    )
}