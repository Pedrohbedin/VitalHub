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
import { useNavigation } from "@react-navigation/native"

export const CancelModal = ({ show = false, onAction }) => {

    return (
        show &&
        <ModalBackground>
            <Modal height="auto">
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
    const navigation = useNavigation();

    const Continuar = () => {

        navigation.navigate('Clinica');
    }

    return (
        show &&
        <ModalBackground show={show}>
            <Modal fieldWidth="100%" height="75%" position="absolute" padding="10px" justify="center">
                <Title margin="0px 0px 20px 0px">Agendar consulta</Title>
                <Text>Qual o nível da consulta</Text>
                <SpacedContainer padding="0px 0px 20px 0px">
                    <BtnListAppointment backgroundColor="a" borderColor={"#34898F"} colorText="#34898F" textButton={"Rotina"} clickButton={statusLista === "Rotina"} onPress={() => setStatusLista("Rotina")} />
                    <BtnListAppointment backgroundColor="a" borderColor={"#34898F"} colorText="#34898F" textButton={"Exame"} clickButton={statusLista === "Exame"} onPress={() => setStatusLista("Exame")} />
                    <BtnListAppointment backgroundColor="a" borderColor={"#34898F"} colorText="#34898F" textButton={"Urgência"} clickButton={statusLista === "Urgência"} onPress={() => setStatusLista("Urgência")} />
                </SpacedContainer>
                <Text>Informe a localização desejada</Text>
                <Input placeholder="Informe a localização" placeholderTextColor="#34898F" margin="0px 0px 30px 0px" />
                <Button onPress={() => {
                    Continuar()
                    onAction()
                }
                }>
                    <ButtonTitle colorText="#FFFFFF">Continuar</ButtonTitle>
                </Button>
                <TouchableOpacity onPress={onAction}>
                    <DbLink>Cancelar</DbLink>
                </TouchableOpacity>
            </Modal>
        </ModalBackground>
    )
}

export const AgendarModal = ({ show, onAction }) => {

    return (
        show &&
        <ModalBackground show={show} >
            <Modal fieldWidth="95%" height="auto" justify="center">
                <Title>Agendar consulta</Title>
                <Text colorText="#33303E">Consulte os dados selecionados para a sua consulta</Text>
                <Text fontFamily="MontserratAlternates_600SemiBold" textAlign="left" margin="0px 0px 10px 0px">Data da consulta</Text>
                <Text textAlign="left">1 de Novembro de 2023</Text>
                <Text fontFamily="MontserratAlternates_600SemiBold" textAlign="left" margin="0px 0px 10px 0px">Médico(a) da consulta</Text>
                <Text textAlign="left" margin="0px 0px 5px 0px">Dra Alessandra</Text>
                <Text textAlign="left">Demartologa, Esteticista</Text>
                <Text fontFamily="MontserratAlternates_600SemiBold" textAlign="left" margin="0px 0px 10px 0px">Local da consulta</Text>
                <Text textAlign="left">São Paulo, SP</Text>
                <Text fontFamily="MontserratAlternates_600SemiBold" textAlign="left" margin="0px 0px 10px 0px">Tipo da consulta</Text>
                <Text textAlign="left">Rotina</Text>
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

export const DescModal = ({ show, onAction }) => {

    return (
        show &&
        <ModalBackground show={show} >
            <Modal fieldWidth="95%" height="auto" justify="center">
                <PerfilImage border="10px" padding="30%" source={{ uri: 'https://thumbs.dreamstime.com/b/retrato-exterior-do-doutor-masculino-35801901.jpg' }} />
                <Title>Dr. Claudio</Title>
                <SpacedContainer fieldWidth="70%">
                    <Text fieldWidth="auto">Cliníco geral</Text>
                    <Text fieldWidth="auto">CRM-15286</Text>
                </SpacedContainer>
                <Button>
                    <ButtonTitle colorText="#FFFFFF">
                        Ver local da consulta
                    </ButtonTitle>
                </Button>
                <TouchableOpacity onPress={onAction}>
                    <DbLink>Cancelar</DbLink>
                </TouchableOpacity>
            </Modal>
        </ModalBackground>
    )
}