import { FlatList, TouchableOpacity } from "react-native"
import { ButtonTitle, Title } from "../../../components/Title/style"
import { Button } from "../../../components/Button/style"
import { DbLink } from "../../../components/Link/style"
import { Container } from "../../../components/Container/Style"
import { CardMedico } from "../../../components/Card/Card"
import { useState } from "react"

export function Medico({ navigation }) {

    const [selectedId, setSelectedId] = useState("");
    
    DATA = [
        {
            id: "3",
            nome: "teste",
            especialidade: "sla, teste"
        },
        {
            id: "4",
            nome: "Dr sla",
            especialidade: "teste, sla"
        },
    ]
    return (
        <Container>
            <Title>Selecionar médico</Title>
            <FlatList
                style={{ width: "90%" }}
                data={DATA}
                renderItem={({ item }) => <CardMedico data={item} onPress={() => setSelectedId(item.id)} borderColor={item.id === selectedId ? '#496BBA' : '#FFFFFF'} />}
                keyExtractor={item => item.id}
                showsVerticalScrollIndicator={false} />
            <Button onPress={() => navigation.navigate('Data')}>
                <ButtonTitle colorText="white">Continuar</ButtonTitle>
            </Button>
            <TouchableOpacity onPress={() => navigation.navigate('Clinica')}>
                <DbLink>Cancelar</DbLink>
            </TouchableOpacity>
        </Container>
    )
}