import { FlatList } from "react-native";
import { CardClinica } from "../../../components/Card/Card";
import { Container } from "../../../components/Container/Style";
import { ButtonTitle, Title } from "../../../components/Title/style";
import { Button } from "../../../components/Button/style";
import { DbLink } from "../../../components/Link/style";
import { TouchableOpacity } from "react-native";
import { useState } from "react";

export function Clinica({ navigation }) {
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
    const [selectedId, setSelectedId] = useState("");
    return (
        <Container>
            <Title>Selecionar clínica</Title>
            <FlatList
                style={{ width: "90%" }}
                data={DATA}
                renderItem={({ item }) => <CardClinica data={item} onPress={() => setSelectedId(item.id)} borderColor={item.id === selectedId ? '#496BBA' : '#FFFFFF'} />}
                keyExtractor={item => item.id}
                showsVerticalScrollIndicator={false} />
            <Button onPress={() => navigation.navigate('Medico')}><ButtonTitle>Continuar</ButtonTitle></Button>
            <TouchableOpacity onPress={() => navigation.navigate('Main', { Aparece: true })}>
                <DbLink>Cancelar</DbLink>
            </TouchableOpacity>
        </Container >
    )
}