import { Button } from "../../../components/Button/style";
import { Container } from "../../../components/Container/Style";
import { DbLink } from "../../../components/Link/style";
import { ButtonTitle, Title } from "../../../components/Title/style";
import CalendarComponent from "../../../components/Calender";
import InputSelect from "../../../components/SelectInput/SelectInput";
import { View } from "react-native";
import { useState } from "react";
import { AgendarModal } from "../../../components/Modal";
import { TouchableOpacity } from "react-native";

export function DataPage({ navigation }) {

    const Cancelar = () => {

        navigation.navigate('Medico');
    }

    const Confirmar = () => {

        navigation.navigate('Main');
    }

    const [modal, setModal] = useState(false)

    return (
        <>
            <AgendarModal show={modal} onAction={() => {
                setModal(false);
                Confirmar();
            }} />
            <Container>
                <Title>Selecionar data</Title>
                <View style={{ height: 350 }}>
                    <CalendarComponent />
                </View>
                <InputSelect />
                <Button onPress={() => setModal(true)}>
                    <ButtonTitle colorText="#FFFFFF">Confirmar</ButtonTitle>
                </Button>
                <TouchableOpacity onPress={Cancelar}>
                    <DbLink>Cancelar</DbLink>
                </TouchableOpacity>
            </Container>
        </>
    )
}