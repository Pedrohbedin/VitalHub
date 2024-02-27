import { FlatList, View } from "react-native";
import { Container, SpacedContainer } from "../../components/Container/Style";
import { Header } from "../../components/Container/Style";
import { HeaderImage } from "../../components/Image/style";
import { Text } from "../../components/Text/style";
import { MiddleTitle } from "../../components/Title/style";
import { Icon } from "react-native-elements";
import { BtnListAppointment } from "../../components/BtnListAppointment/BtnListAppointment";
import { useState } from "react";
import { Card } from "../../components/Card/Card";
import { CancelModal, ConsultaModal, DescModal, ProntuarioModal } from "../../components/Modal";
import { Navegator } from "../../components/Navegator/Navegator";
import { Calendario } from "../../components/CalendarioHome";

export const Home = () => {

    const [statusLista, setStatusLista] = useState("agendadas");
    const [modalCancelar, setModalCancelar] = useState(false);
    const [modalProntuario, setModalProntuario] = useState(false);
    const [modalConsulta, setModalConsulta] = useState(false);
    const [modalDesc, setModalDesc] = useState(false);
    const [data, setData] = useState(false);
    const [tipoConta, setTipoConta] = useState("Dr");
    const [currentItem, setCurrentItem] = useState()


    function AoClicar(item) {
        setData(item)
        statusLista == "agendadas" ? setModalCancelar(true) : setModalProntuario(true)
    }

    const DATA = [
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            horario: '14:00',
            nome: 'Paciente',
            email: 'teste@gmail.com',
            idade: '18',
            tipoConsulta: 'Urgente',
            situacao: 'canceladas',
            tipoConta: "Dr"
        },
        {
            id: 'bd8acbea-c1b1-46c2-aed5-3ad53abb28ba',
            horario: '14:00',
            nome: 'Doutor',
            email: 'teste@gmail.com',
            idade: '18',
            tipoConsulta: 'Urgente',
            situacao: 'agendadas',
            tipoConta: "Dr"
        },
        {
            id: 'bd9acbea-c1b1-46c2-aed5-3ad53abb28ba',
            horario: '14:00',
            nome: 'Paciente',
            idade: '18',
            email: 'teste@gmail.com',
            tipoConsulta: 'Urgente',
            situacao: 'realizadas',
            tipoConta: "Pa"
        },
        {
            id: 'bd10acbea-c1b1-46c2-aed5-3ad53abb28ba',
            horario: '14:00',
            nome: 'Paciente',
            idade: '15',
            email: 'teste@gmail.com',
            tipoConsulta: 'Urgente',
            situacao: 'realizadas',
            tipoConta: "Pa"
        },
    ];

    return (
        <>
            <ProntuarioModal data={data} show={modalProntuario} onAction={() => setModalProntuario(false)} />
            <ConsultaModal show={modalConsulta} onAction={() => setModalConsulta(false)} />
            <CancelModal show={modalCancelar} onAction={() => setModalCancelar(false)} />
            <DescModal data={currentItem} show={modalDesc} onAction={() => setModalDesc(false)} />
            <Header>
                <SpacedContainer padding="20px">
                    <View style={{ flexDirection: "row", gap: 10 }}>
                        <HeaderImage source={{ uri: 'https://thumbs.dreamstime.com/b/retrato-exterior-do-doutor-masculino-35801901.jpg', }} />
                        <View>
                            <Text margin="0" textAlign="left">Bem vindo</Text>
                            <MiddleTitle margin="0" colorText="#FFFFFF" width="auto">Dr. Claudio</MiddleTitle>
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
            <Container style={{ paddingTop: 15, }}>
                <Calendario />
                <SpacedContainer>
                    <BtnListAppointment textButton={"Agendadas"} clickButton={statusLista === "agendadas"} onPress={() => setStatusLista("agendadas")} />
                    <BtnListAppointment textButton={"Realizadas"} clickButton={statusLista === "realizadas"} onPress={() => setStatusLista("realizadas")} />
                    <BtnListAppointment textButton={"Canceladas"} clickButton={statusLista === "canceladas"} onPress={() => setStatusLista("canceladas")} />
                </SpacedContainer>
                <FlatList
                    data={DATA}
                    renderItem={({ item }) => (statusLista == item.situacao && tipoConta != item.tipoConta) && <Card data={item} onAction={() => AoClicar(item)} onClick={() => {
                        item.tipoConta === "Dr" ? setModalDesc(true) : null
                        setCurrentItem(item)
                    }} />}
                    keyExtractor={item => item.id}
                    showsVerticalScrollIndicator={false} />
                <Navegator tipoConta={tipoConta} onAction={() => setModalConsulta(!modalConsulta)} visible={!modalConsulta} />
            </Container>
        </>
    )
}