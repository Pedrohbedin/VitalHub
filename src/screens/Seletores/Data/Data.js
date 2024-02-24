import { Button } from "../../../components/Button/style";
import { Container } from "../../../components/Container/Style";
import { DbLink } from "../../../components/Link/style";
import { Text } from "../../../components/Text/style";
import { ButtonTitle, Title } from "../../../components/Title/style";
import CalendarComponent from "../../../components/Calender";
import InputSelect from "../../../components/SelectInput/SelectInput";
import { View } from "react-native";

export function DataPage() {
    return (
        <Container>
            <Title style={{marginTop: 72}}>Selecionar data</Title>
            <View style={{height: 350}}>
                <CalendarComponent />
            </View>
            <InputSelect />
            <Button>
                <ButtonTitle colorText="#FFFFFF">Confirmar</ButtonTitle>
            </Button>
            <DbLink>Cancelar</DbLink>
        </Container>
    )
}