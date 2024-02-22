import { TouchableOpacity, View } from "react-native"
import { PerfilImage } from "../Image/style"
import { ButtonTitle, Title } from "../Title/style"
import { Modal, ModalBackground } from "./style"
import { Text } from "../Text/style"
import { Button } from "../Button/style"
import { DbLink } from "../Link/style"
import { Input } from "../../components/Input/style"
import { SpacedContainer } from "../Container/Style"
import { useState } from "react"
import { BtnListAppointment } from "../BtnListAppointment/BtnListAppointment"

export const CancelModal = ({ show = false, onAction }) => {

    return (
        show &&
        <ModalBackground>
            <Modal>
                <Title>Cancelar consulta</Title>
                <Text fontSize="16px" textAlign="center">Ao cancelar essa consulta, abrirá uma possível disponibilidade no seu horário, deseja mesmo cancelar essa consulta?</Text>
                <Button onPress={onAction}>
                    <ButtonTitle colorText="#FFFFFF">CONFIRMAR</ButtonTitle>
                </Button>
                <TouchableOpacity onPress={onAction}>
                    <DbLink>Cancelar</DbLink>
                </TouchableOpacity>
            </Modal>
        </ModalBackground>
    )
}

export const ProntuarioModal = ({ show, data, onAction }) => {
    return (
        show &&
        <ModalBackground show={show}>
            <Modal>
                <PerfilImage border="10px" padding="30%" source={{ uri: 'https://thumbs.dreamstime.com/b/retrato-exterior-do-doutor-masculino-35801901.jpg' }} />
                <Title margin="20px 0 0 0">{data.paciente}</Title>
                <View style={{ flexDirection: "row", gap: 20 }}>
                    <Text margin="20px 0px" fieldWidth="auto">{data.idade} anos</Text>
                    <Text margin="20px 0px" fieldWidth="auto">{data.email}</Text>
                </View>
                <Button padding="0px 0px">
                    <ButtonTitle colorText="#FFFFFF">Inserir Prontuário</ButtonTitle>
                </Button>
                <TouchableOpacity onPress={onAction}>
                    <DbLink>Cancelar</DbLink>
                </TouchableOpacity>
            </Modal>
        </ModalBackground>
    )
}


export const ConsultaModal = ({ show, onAction }) => {

    const [statusLista, setStatusLista] = useState("")

    return (
        show &&
        <ModalBackground show={show}>
            <Modal fieldWidth="100%" height="65%" position="absolute" padding="10px" justify="center">
                <Title margin="0px 0px 20px 0px">Agendar consulta</Title>
                <Text>Qual o nível da consulta</Text>
                <SpacedContainer padding="0px 0px 20px 0px">
                    <BtnListAppointment backgroundColor="a" borderColor={"#34898F"} colorText="#34898F" textButton={"Rotina"} clickButton={statusLista === "Rotina"} onPress={() => setStatusLista("Rotina")} />
                    <BtnListAppointment backgroundColor="a" borderColor={"#34898F"} colorText="#34898F" textButton={"Exame"} clickButton={statusLista === "Exame"} onPress={() => setStatusLista("Exame")} />
                    <BtnListAppointment backgroundColor="a" borderColor={"#34898F"} colorText="#34898F" textButton={"Urgência"} clickButton={statusLista === "Urgência"} onPress={() => setStatusLista("Urgência")} />
                </SpacedContainer>
                <Text>Informe a localização desejada</Text>
                <Input placeholder="Informe a localização" placeholderTextColor="#34898F" margin="0px 0px 30px 0px" />
                <Button>
                    <ButtonTitle colorText="#FFFFFF">Continuar</ButtonTitle>
                </Button>
                <TouchableOpacity onPress={onAction}>
                    <DbLink>Cancelar</DbLink>
                </TouchableOpacity>
            </Modal>
        </ModalBackground>
    )
}