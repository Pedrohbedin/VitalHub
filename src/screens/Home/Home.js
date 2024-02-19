import { FlatList, SafeAreaView, View } from "react-native";
import { Container, SpacedContainer } from "../../components/Container/Style";
import { Header } from "../../components/Container/Style";
import { HeaderImage } from "../../components/Image/style";
import { Text } from "../../components/Text/style";
import { MiddleTitle } from "../../components/Title/style";
import { Icon } from "react-native-elements";
import CalendarList from "../../components/Calender";
import { BtnListAppointment } from "../../components/BtnListAppointment/BtnListAppointment";
import { useState } from "react";
import { CardList } from "../../components/CardList/CardList";
import { ScrollView } from "react-native";
import { Card } from "../../components/Card/Card";

export const Home = () => {

    const [statusLista, setStatusLista] = useState("agendadas");


    const DATA = [
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            horario: '14:00',
            paciente: 'Pedro',
            idade: '18',
            tipoConsulta: 'Urgente'
        },
        {
            id: 'bd8acbea-c1b1-46c2-aed5-3ad53abb28ba',
            horario: '14:00',
            paciente: 'Pedro',
            idade: '18',
            tipoConsulta: 'Urgente'
        },
        {
            id: 'bd9acbea-c1b1-46c2-aed5-3ad53abb28ba',
            horario: '14:00',
            paciente: 'Pedro',
            idade: '18',
            tipoConsulta: 'Urgente'
        },
        {
            id: 'bd10acbea-c1b1-46c2-aed5-3ad53abb28ba',
            horario: '14:00',
            paciente: 'Pedro',
            idade: '18',
            tipoConsulta: 'Urgente'
        },
    ];

    return (
        <ScrollView>
            <Container>
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
                    renderItem={({ item }) => <Card horario={item.horario} paciente={item.paciente} idade={item.idade} tipoConsulta={item.tipoConsulta}/>}
                    keyExtractor={item => item.id} />
                {/* {DATA.map((DATA) => <Card paciente={DATA.paciente} horario={DATA.horario} idade={DATA.idade} tipoConsulta={DATA.tipoConsulta} />)} */}
            </Container>
        </ScrollView>
    )
}