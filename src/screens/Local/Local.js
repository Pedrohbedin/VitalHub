import { View } from "react-native"
import { Container } from "../../components/Container/Style"
import { InfoInput } from "../../components/Input/style"
import { Text } from "../../components/Text/style"
import { Title } from "../../components/Title/style"
import { TouchableOpacity } from "react-native"
import { DbLink } from "../../components/Link/style"
import { useNavigation } from "@react-navigation/native"

export const Local = () => {
    const navigation = useNavigation()
    const Cancelar = () => {

        navigation.navigate('Main');
    }
    return (
        <Container>
            <View style={{ backgroundColor: "#EFEFEF", width: "100%", paddingTop: "100%" }}>

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
            <View style={{ marginTop: 40 }}>
                <TouchableOpacity onPress={Cancelar}>
                    <DbLink>Cancelar</DbLink>
                </TouchableOpacity>
            </View>
        </Container>
    )
}