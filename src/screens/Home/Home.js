import { FlatList, SafeAreaView, View } from "react-native";
import { Container, SpacedContainer } from "../../components/Container/Style";
import { Header } from "../../components/Container/Style";
import { HeaderImage, PerfilImage } from "../../components/Image/style";
import { Text } from "../../components/Text/style";
import { ButtonTitle, MiddleTitle, Title } from "../../components/Title/style";
import { Icon } from "react-native-elements";
import CalendarList from "../../components/Calender";
import { BtnListAppointment } from "../../components/BtnListAppointment/BtnListAppointment";
import { useState } from "react";
import { Card } from "../../components/Card/Card";
import { Modal, ModalBackground } from "../../components/Modal/style";
import { Button } from "../../components/Button/style";
import { DbLink } from "../../components/Link/style";
import { TouchableOpacity } from "react-native";

export const Home = () => {

    const [modal, setModal] = useState(false);
    const [modalProntuario, setModalProntuario] = useState(false);

    const [statusLista, setStatusLista] = useState("agendadas");

    const DATA = [
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            horario: '14:00',
            paciente: 'Pedro',
            idade: '18',
            tipoConsulta: 'Urgente',
            situacao: 'canceladas'
        },
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            horario: '14:00',
            paciente: 'Pedro',
            idade: '18',
            tipoConsulta: 'Urgente',
            situacao: 'canceladas'
        },
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            horario: '14:00',
            paciente: 'Pedro',
            idade: '18',
            tipoConsulta: 'Urgente',
            situacao: 'canceladas'
        },
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            horario: '14:00',
            paciente: 'Pedro',
            idade: '18',
            tipoConsulta: 'Urgente',
            situacao: 'canceladas'
        },
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            horario: '14:00',
            paciente: 'Pedro',
            idade: '18',
            tipoConsulta: 'Urgente',
            situacao: 'canceladas'
        },
        {
            id: 'bd8acbea-c1b1-46c2-aed5-3ad53abb28ba',
            horario: '14:00',
            paciente: 'Pedro',
            idade: '18',
            tipoConsulta: 'Urgente',
            situacao: 'canceladas'
        },
        {
            id: 'bd9acbea-c1b1-46c2-aed5-3ad53abb28ba',
            horario: '14:00',
            paciente: 'Pedro',
            idade: '18',
            tipoConsulta: 'Urgente',
            situacao: 'agendadas'
        },
        {
            id: 'bd10acbea-c1b1-46c2-aed5-3ad53abb28ba',
            horario: '14:00',
            paciente: 'Pedro',
            idade: '18',
            tipoConsulta: 'Urgente',
            situacao: 'realizadas'
        },
    ];

    return (
        <Container>
            <ModalBackground show={modal}>
                <Modal>
                    <Title>Cancelar consulta</Title>
                    <Text fontSize="16" textAlign="center">Ao cancelar essa consulta, abrirá uma possível disponibilidade no seu horário, deseja mesmo cancelar essa consulta?</Text>
                    <Button onPress={() => setModal(false)}>
                        <ButtonTitle colorText="#FFFFFF">CONFIRMAR</ButtonTitle>
                    </Button>
                    <TouchableOpacity onPress={() => setModal(false)}>
                        <DbLink>Cancelar</DbLink>
                    </TouchableOpacity>
                </Modal>
            </ModalBackground>
            <ModalBackground show={modalProntuario}>
                <Modal>
                    <PerfilImage border="10px" padding="30%" width="100%" source={{ uri: 'https://thumbs.dreamstime.com/b/retrato-exterior-do-doutor-masculino-35801901.jpg' }} />
                    <Title margin="20px 0 0 0">Niccole Sarga</Title>
                    <View style={{ flexDirection: "row", gap: 20 }}>
                        <Text margin="20px 0px" fieldWidth="auto">22 anos</Text>
                        <Text margin="20px 0px" fieldWidth="auto">niccole.sarga@gmail.com</Text>
                    </View>
                    <Button padding="0px 0px">
                        <ButtonTitle colorText="#FFFFFF">Inserir Prontuário</ButtonTitle>
                    </Button>
                    <TouchableOpacity onPress={() => setModalProntuario(false)}>
                        <DbLink>Cancelar</DbLink>
                    </TouchableOpacity>
                </Modal>
            </ModalBackground>
            <Header>
                <SpacedContainer style={{ padding: 10 }}>
                    <View style={{ flexDirection: "row", gap: 10 }}>
                        <HeaderImage source={{ uri: 'https://thumbs.dreamstime.com/b/retrato-exterior-do-doutor-masculino-35801901.jpg', }} />
                        <View style={{ gap: -20 }}>
                            <Text style={{ textAlign: 'left' }}>Bem vindo</Text>
                            <MiddleTitle style={{ color: 'white', width: 'auto' }}>Dr. Claudio</MiddleTitle>
                        </View>
                    </View>
                    <Icon
                        size={25}
                        name='bell'
                        type='material-community'
                        color={'#FFFFFF'}
                    />
                </SpacedContainer>
            </Header>
            <CalendarList />
            <SpacedContainer>
                <BtnListAppointment textButton={"Agendadas"} clickButton={statusLista === "agendadas"} onPress={() => setStatusLista("agendadas")} />
                <BtnListAppointment textButton={"Realizadas"} clickButton={statusLista === "realizadas"} onPress={() => setStatusLista("realizadas")} />
                <BtnListAppointment textButton={"Canceladas"} clickButton={statusLista === "canceladas"} onPress={() => setStatusLista("canceladas")} />
            </SpacedContainer>
            <FlatList
                data={DATA}
                renderItem={({ item }) => statusLista == item.situacao ? <Card statusLista={statusLista} horario={item.horario} paciente={item.paciente} idade={item.idade} tipoConsulta={item.tipoConsulta} onPress={() => { statusLista == "agendadas" ? setModal(true) : setModalProntuario(true) }} /> : null}
                keyExtractor={item => item.id} />
        </Container>
    )
}