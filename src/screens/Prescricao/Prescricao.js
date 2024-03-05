import { ScrollView, TouchableOpacity, View } from "react-native"
import { Container, SpacedContainer } from "../../components/Container/Style"
import { PerfilImage } from "../../components/Image/style"
import { ButtonTitle, MiddleTitle, Title } from "../../components/Title/style"
import { Text } from "../../components/Text/style"
import { InfoInput } from "../../components/Input/style"
import { Button } from "../../components/Button/style"
import { DbLink } from "../../components/Link/style"

export const Prescricao = ({ navigation }) => {

    const Voltar = () => {
        navigation.navigate("Main")
    }
    return (
        <ScrollView>
            <Container>
                <PerfilImage source={{ uri: 'https://media.istockphoto.com/id/1226551176/pt/foto/advertisement-concept-side-view-half-face-profile-with-copy-space-of-perfect-smiling-man.jpg?s=612x612&w=0&k=20&c=5Hf34eKWwSFbRKoWfX1GlgxZvjKvURk_Id0PERH2MmE=', }} />
                <Title>Dr. Claudio</Title>
                <View style={{ flexDirection: "row", gap: 20 }}>
                    <Text fieldWidth="auto">Cliníco geral</Text>
                    <Text fieldWidth="auto">CRM-15286</Text>
                </View>
                <MiddleTitle textAlign="left">Descrição da consulta</MiddleTitle>
                <InfoInput multiline numberOfLines={5} style={{ textAlignVertical: 'top' }} />
                <MiddleTitle textAlign="left">Diagnóstico do paciente</MiddleTitle>
                <InfoInput style={{ textAlignVertical: 'top' }} />
                <MiddleTitle textAlign="left">Prescrição médica</MiddleTitle>
                <InfoInput multiline numberOfLines={5} style={{ textAlignVertical: 'top' }} />
                <MiddleTitle textAlign="left">Exames médicos</MiddleTitle>
                <InfoInput multiline numberOfLines={5} style={{ textAlign: "center" }} placeholder="Nenhuma foto informada" />
                <SpacedContainer>
                    <Button style={{ flex: 1 }} >
                        <ButtonTitle colorText="#FFFFFF">Enviar</ButtonTitle>
                    </Button>
                    <View style={{ flex: 1 }}>
                        <TouchableOpacity>
                            <Text fieldWidth="auto" colorText="#C81D25">Cancelar</Text>
                        </TouchableOpacity>
                    </View>
                </SpacedContainer>
                <InfoInput multiline numberOfLines={5} style={{ textAlign: "center" }} placeholder="Resultado do exame de sangue : tudo normal" />
                <TouchableOpacity onPress={Voltar}>
                    <DbLink>Voltar</DbLink>
                </TouchableOpacity>
            </Container>
        </ScrollView>
    )
}