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
import { useNavigation } from "@react-navigation/native";

export const Home = () => {

    const [statusLista, setStatusLista] = useState("agendadas");
    const [modalCancelar, setModalCancelar] = useState(false);
    const [modalProntuario, setModalProntuario] = useState(false);
    const [modalConsulta, setModalConsulta] = useState(false);
    const [modalDesc, setModalDesc] = useState(false);
    const [data, setData] = useState(false);
    const [tipoConta, setTipoConta] = useState("Pa");
    const [currentItem, setCurrentItem] = useState()
    const navigation = useNavigation()

    function AoClicar(item) {
        setData(item)
        statusLista == "agendadas" ? setModalCancelar(true) : setModalProntuario(true)
    }

    const DATA = [
        {
            id: 'bd1acbea-c1b1-46c2-aed5-3ad53abb28ba',
            horario: '14:00',
            nome: 'Pedro Carlos',
            email: 'teste@gmail.com',
            idade: '18',
            tipoConsulta: 'Urgente',
            situacao: 'canceladas',
            tipoConta: "Pa"
        },
        {
            id: 'bd2acbea-c1b1-46c2-aed5-3ad53abb28ba',
            horario: '14:00',
            nome: 'Andre da Silva',
            email: 'teste@gmail.com',
            idade: '18',
            tipoConsulta: 'Urgente',
            situacao: 'realizadas',
            tipoConta: "Pa"
        },
        {
            id: 'bd3acbea-c1b1-46c2-aed5-3ad53abb28ba',
            horario: '14:00',
            nome: 'Doutor Jose ',
            email: 'teste@gmail.com',
            idade: '18',
            tipoConsulta: 'Urgente',
            situacao: 'agendadas',
            tipoConta: "Dr"
        },
        {
            id: 'bd4acbea-c1b1-46c2-aed5-3ad53abb28ba',
            horario: '14:00',
            nome: 'Doutor Carlos',
            idade: '18',
            email: 'teste@gmail.com',
            tipoConsulta: 'Urgente',
            situacao: 'realizadas',
            tipoConta: "Dr"
        },
        {
            id: 'bd5acbea-c1b1-46c2-aed5-3ad53abb28ba',
            horario: '14:00',
            nome: 'Felipe Sousa',
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
                <SpacedContainer style={{ height: "100%" }} >
                    <View style={{ flexDirection: "row", gap: 10 }}>
                        <HeaderImage source={{ uri: 'https://thumbs.dreamstime.com/b/retrato-exterior-do-doutor-masculino-35801901.jpg', }} />
                        <View style={{ width: "70%" }}>
                            <Text fieldwidth="100%" margin="0" textAlign="left">Bem vindo</Text>
                            <MiddleTitle textAlign="left" margin="0" colorText="#FFFFFF" fieldwidth="100%">{tipoConta}. Claudio</MiddleTitle>
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
                        item.tipoConta === "Dr" ? setModalDesc(true) : navigation.navigate("Prescricao")
                        setCurrentItem(item)
                    }} />}
                    keyExtractor={item => item.id}
                    showsVerticalScrollIndicator={false} />
                <Navegator tipoConta={tipoConta} onAction={() => setModalConsulta(!modalConsulta)} visible={!modalConsulta} />
            </Container>
        </>
    )
}