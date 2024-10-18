import { ScrollView, TouchableOpacity, View } from "react-native"
import { Container, SpacedContainer } from "../../components/Container/Style"
import { PerfilImage } from "../../components/Image/style"
import { ButtonTitle, MiddleTitle, Title } from "../../components/Title/style"
import { Text } from "../../components/Text/style"
import { InfoInput } from "../../components/Input/style"
import { Button } from "../../components/Button/style"
import { DbLink } from "../../components/Link/style"
import { Icon } from "react-native-elements"
import { CameraModal } from "../Camera/Camera"
import { useState } from "react"

export function Prescricao({ navigation }) {
    const [showCameraModal, setShowCameraModal] = useState(false)
    const [uriCameraCapture, setUriCameraCapture] = useState("")
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
                <InfoInput multiline numberOfLines={5} style={{ textAlign: "center" }} placeholder={"Nenhuma foto informada"} />
                <SpacedContainer>
                    <Button onPress={() => setShowCameraModal(true)} backgroundColor="#49B3BA" borderColor="#49B3BA" style={{ flex: 1, flexDirection: "row", justifyContent: "center" }} >
                        <Icon
                            size={25}
                            name='camera-plus-outline'
                            type='material-community'
                            color='white'
                        /><ButtonTitle colorText="#FFFFFF">  Enviar</ButtonTitle>
                    </Button>
                    <View style={{ flex: 1 }}>
                        <TouchableOpacity>
                            <Text fieldWidth="auto" colorText="#C81D25">Cancelar</Text>
                        </TouchableOpacity>
                    </View>
                </SpacedContainer>

                <View style={{ width: "90%", height: 2, backgroundColor: "#8C8A97" }}></View>
                <InfoInput multiline numberOfLines={5} style={{ textAlign: "center" }} placeholder="Resultado do exame de sangue : tudo normal" />
                <TouchableOpacity onPress={() => navigation.navigate("Main")}>
                    <DbLink>Voltar</DbLink>
                </TouchableOpacity>
            </Container>
            <CameraModal
                visible={showCameraModal}
                setUriCameraCapture={setUriCameraCapture}
                setShowCameraModal={setShowCameraModal}
            />
        </ScrollView>
    )
}