import { TouchableOpacity, View } from "react-native"
import { PerfilImage } from "../Image/style"
import { ButtonTitle, Title } from "../Title/style"
import { Modal, ModalBackground } from "./style"
import { Text } from "../Text/style"
import { Button } from "../Button/style"
import { DbLink } from "../Link/style"

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
                <PerfilImage border="10px" padding="30%" width="100%" source={{ uri: 'https://thumbs.dreamstime.com/b/retrato-exterior-do-doutor-masculino-35801901.jpg' }} />
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