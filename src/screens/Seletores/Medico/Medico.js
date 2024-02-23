import { FlatList, TouchableOpacity } from "react-native"
import { ButtonTitle, Title } from "../../../components/Title/style"
import { Button } from "../../../components/Button/style"
import { DbLink } from "../../../components/Link/style"
import { Container } from "../../../components/Container/Style"
import { CardMedico } from "../../../components/Card/Card"

export function Medico() {
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
            <Button><ButtonTitle colorText="white">Continuar</ButtonTitle></Button>
            <TouchableOpacity>
                <DbLink>Cancelar</DbLink>
            </TouchableOpacity>
        </Container>
    )
}