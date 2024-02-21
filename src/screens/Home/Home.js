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
import { CancelModal, ProntuarioModal } from "../../components/Modal";

export const Home = () => {

    const [statusLista, setStatusLista] = useState("agendadas");
    const [modalCancelar, setModalCancelar] = useState(false);
    const [modalProntuario, setModalProntuario] = useState(false);
    const [data, setData] = useState(false);

    function AoClicar(item) {
        setData(item)
        statusLista == "agendadas" ? setModalCancelar(true) : setModalProntuario(true)
    }

    const DATA = [
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            horario: '14:00',
            paciente: 'Texto1',
            email: 'teste@gmail.com',
            idade: '18',
            tipoConsulta: 'Urgente',
            situacao: 'canceladas'
        },
        {
            id: 'bd8acbea-c1b1-46c2-aed5-3ad53abb28ba',
            horario: '14:00',
            paciente: 'Texto2',
            email: 'teste@gmail.com',
            idade: '18',
            tipoConsulta: 'Urgente',
            situacao: 'agendadas'
        },
        {
            id: 'bd9acbea-c1b1-46c2-aed5-3ad53abb28ba',
            horario: '14:00',
            paciente: 'Texto3',
            idade: '18',
            email: 'teste@gmail.com',
            tipoConsulta: 'Urgente',
            situacao: 'realizadas'
        },
    ];

    return (
        <Container>
            <Header>
                <SpacedContainer style={{ padding: 10 }}>
                    <View style={{ flexDirection: "row", gap: 10 }}>
                        <HeaderImage source={{ uri: 'https://thumbs.dreamstime.com/b/retrato-exterior-do-doutor-masculino-35801901.jpg', }} />
                        <View style={{ gap: -20 }}>
                            <Text textAlign="left">Bem vindo</Text>
                            <MiddleTitle colorText="#FFFFFF" fieldWidth="auto">Dr. Claudio</MiddleTitle>
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
                renderItem={({ item }) => statusLista == item.situacao && <Card data={item} onAction={() => AoClicar(item)} />}
                keyExtractor={item => item.id} />
            <ProntuarioModal data={data} show={modalProntuario} onAction={() => setModalProntuario(false)} />
            <CancelModal show={modalCancelar} onAction={() => setModalCancelar(false)} />
        </Container>
    )
}