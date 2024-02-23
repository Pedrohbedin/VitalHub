import { Button } from "../../../components/Button/style";
import { Container } from "../../../components/Container/Style";
import { DbLink } from "../../../components/Link/style";
import { Text } from "../../../components/Text/style";
import { ButtonTitle, Title } from "../../../components/Title/style";
import CalendarComponent from "../../../components/Calender";
import InputSelect from "../../../components/SelectInput/SelectInput";

export function DataPage() {
    return (
        <Container>
            <Title>Selecionar data</Title>

            <Text>Selecione um horário disponível</Text>
            <CalendarComponent />
            <InputSelect />
            <Button>
                <ButtonTitle colorText="#FFFFFF">Confirmar</ButtonTitle>
            </Button>
            <DbLink>Cancelar</DbLink>
        </Container>
    )
}