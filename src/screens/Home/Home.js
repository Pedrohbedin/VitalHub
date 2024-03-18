import { FlatList, View } from "react-native";
import { Container, SpacedContainer } from "../../components/Container/Style";
import { Header } from "../../components/Container/Style";
import { HeaderImage } from "../../components/Image/style";
import { Text } from "../../components/Text/style";
import { MiddleTitle } from "../../components/Title/style";
import { Icon } from "react-native-elements";
import { BtnListAppointment } from "../../components/BtnListAppointment/BtnListAppointment";
import { useEffect, useState } from "react";
import { Card } from "../../components/Card/Card";
import { CancelModal, ConsultaModal, DescModal, ProntuarioModal } from "../../components/Modal";
import { Navegator } from "../../components/Navegator/Navegator";
import { HomeCalendarComponent } from "../../components/Calender";
import * as Notifications from "expo-notifications"

//Solicita permições de notificação ao iniciar o app
Notifications.requestPermissionsAsync();

//Defini como as notificações devem ser tratadas quando recebidass
Notifications.setNotificationHandler({
    handleNotification: async () => ({
        // Reproduzir som ao receber notificação?
        shouldPlaySound: true,
        //Número de notificações no ícone do app
        shouldSetBadge: false,
        // Mostrar alerta quando a notificação for recebidar? 
        shouldShowAlert: true
    })
})

export function Home({ navigation, route }) {

    const { modal } = route.params;

    useEffect(() => {
        modal == true && setModalConsulta(true)
        console.log(modal)
    }, [modal])


    const [statusLista, setStatusLista] = useState("agendadas");
    const [modalCancelar, setModalCancelar] = useState(false);
    const [modalProntuario, setModalProntuario] = useState(false);
    const [modalConsulta, setModalConsulta] = useState(false);
    const [modalDesc, setModalDesc] = useState(false);
    const [data, setData] = useState(false);
    const [tipoConta] = useState("Pa");
    const [currentItem] = useState()

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
            nome: 'Andre Silva',
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

    const handleCallNotifications = async () => {

        // Obtém o status da permisão
        const { status } = await Notifications.getPermissionsAsync();

        if (status != "granted") {
            alert("Você não deixou as notificações ativas")
            return;
        }
        // Agenda uma notificação
        await Notifications.scheduleNotificationAsync({
            content: {
                title: "Consulta Cancelada",
                body: "Seu/Sua " + tipoConta == "Pa" ? "Dr" : "Paciênte" + " cancelou a consulta",
                sound: '',
            },
            trigger: null
        })
    }

    return (
        <>
            <ProntuarioModal data={data} show3 ={modalProntuario} onAction={() => setModalProntuario(false)} />
            <ConsultaModal show={modalConsulta} onAction={() => setModalConsulta(false)} />
            <CancelModal show={modalCancelar} onAction={() => {
                setModalCancelar(false)
                handleCallNotifications()
            }} />
            <DescModal data={data} show={modalDesc} onAction={() => setModalDesc(false)} />
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
                        color='white'
                    />
                </SpacedContainer>
            </Header>
            <Container style={{ marginTop: -70 }}>
                <HomeCalendarComponent />
                <SpacedContainer>
                    <BtnListAppointment textButton={"Agendadas"} clickButton={statusLista === "agendadas"} onPress={() => setStatusLista("agendadas")} />
                    <BtnListAppointment textButton={"Realizadas"} clickButton={statusLista === "realizadas"} onPress={() => setStatusLista("realizadas")} />
                    <BtnListAppointment textButton={"Canceladas"} clickButton={statusLista === "canceladas"} onPress={() => setStatusLista("canceladas")} />
                </SpacedContainer>
                <FlatList
                    data={DATA}
                    renderItem={({ item }) => (statusLista == item.situacao && tipoConta != item.tipoConta)
                        &&
                        <Card
                            data={item}
                            onAction={
                                () => {
                                    setData(item)
                                    statusLista == "agendadas" ?
                                        setModalCancelar(true)
                                        :
                                        tipoConta == "Dr" ? setModalProntuario(true) : navigation.navigate("Prescricao")
                                }}
                            onClick={() => {
                                statusLista == "agendadas" ? tipoConta == "Pa" ? setModalDesc(true) : "" : null
                            }}
                        />}
                    keyExtractor={item => item.id}
                    showsVerticalScrollIndicator={false}
                />
                <Navegator tipoConta={tipoConta} onAction={() => setModalConsulta(!modalConsulta)} visible={!modalConsulta} />
            </Container>
        </>
    )
}