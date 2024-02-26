import { FlatList, TouchableOpacity } from "react-native"
import { ButtonTitle, Title } from "../../../components/Title/style"
import { Button } from "../../../components/Button/style"
import { DbLink } from "../../../components/Link/style"
import { Container } from "../../../components/Container/Style"
import { CardMedico } from "../../../components/Card/Card"
import { useNavigation } from "@react-navigation/native"

export function Medico() {

    const navigation = useNavigation();

    const Cancelar = () => {

        navigation.navigate('Clinica');
    }

    const Continuar = () => {

        navigation.navigate('Data');
    }

    DATA = [
        {
            id: "3",
            nome: "Clinica da Boa",
            nota: "5",
            local: "São Paulo - SP",
            dias: "Seg-Sex"
        },
        {
            id: "4",
            nome: "Clinica da Ruim",
            nota: "3,6",
            local: "São Paulo - SP",
            dias: "Seg-Sex"
        },
    ]
    return (
        <Container>
            <Title>Selecionar médico</Title>
            <FlatList
                style={{ width: "90%" }}
                data={DATA}
                renderItem={({ item }) => <CardMedico data={item} />}
                keyExtractor={item => item.id}
                showsVerticalScrollIndicator={false} />
            <Button onPress={Continuar}><ButtonTitle colorText="white">Continuar</ButtonTitle></Button>
            <TouchableOpacity onPress={Cancelar}>
                <DbLink>Cancelar</DbLink>
            </TouchableOpacity>
        </Container>
    )
}