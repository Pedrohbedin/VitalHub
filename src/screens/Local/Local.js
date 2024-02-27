import { View } from "react-native"
import { Container, SpacedContainer } from "../../components/Container/Style"
import { CodeInput, InfoInput, Input } from "../../components/Input/style"
import { Text } from "../../components/Text/style"
import { Title } from "../../components/Title/style"

export const Local = () => {
    return (
        <Container>
            <View style={{ backgroundColor: "blue", width: "100%", paddingTop: "100%" }}>

            </View>
            <Title>Clínica Natureh</Title>
            <Text>São Paulo, SP</Text>
            <Text fieldWidth="90%" textAlign="start" >Endereço</Text>
            <InfoInput />
            <View style={{ width: "90%", flexDirection: "row", gap: 32, marginTop: 20 }}>
                <View style={{ flex: 1 }}>
                    <Text textAlign="start" fieldWidth="100%">Número</Text>
                    <InfoInput fieldWidth="100%*" />
                </View>
                <View style={{ flex: 1 }}>
                    <Text textAlign="start" fieldWidth="100%">Bairro</Text>
                    <InfoInput fieldWidth="100%" />
                </View>
            </View>
        </Container>
    )
}