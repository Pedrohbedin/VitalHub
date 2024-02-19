import { View } from "react-native"
import { CardContainer, SpacedContainer } from "../Container/Style"
import { CardImage } from "../Image/style"
import { Title } from "../Title/style"
import { Text } from "../Text/style"
import { Icon } from "react-native-elements"

export const Card = ({
    horario,
    paciente,
    idade,
    tipoConsulta,
    urlFotoPaciente = "https://thumbs.dreamstime.com/b/retrato-exterior-do-doutor-masculino-35801901.jpg"
}) => {
    return (
        <CardContainer style={{
            marginVertical: 20,
            marginHorizontal: 20, flexDirection: 'row', alignItems: 'center'
        }}>
            <SpacedContainer>
                <View style={{ gap: 10, flexDirection: 'row', alignItems: 'center' }}>
                    <CardImage source={{ uri: `${urlFotoPaciente}`, }} />
                    {/* <CardImage source={{ uri: 'https://thumbs.dreamstime.com/b/retrato-exterior-do-doutor-masculino-35801901.jpg', }} /> */}
                    <View style={{ gap: 7, alignItems: "center", padding: 0, flexDirection: "column" }}>
                        <Title fieldWidth="100%" textAlign="left" margin="0">{paciente}</Title>
                        <View style={{ flexDirection: 'row', gap: 15 }}>
                            <Text margin="0px" fieldWidth="auto">{idade}</Text>
                            <Text margin="0px" fieldWidth="auto">{tipoConsulta}</Text>
                        </View>
                        <Text margin="0" colorText="#49B3BA" fieldWidth="100px" textAlign="center" backgroundColor="#E8FCFD" borderRadius="5px">
                            <Icon
                                size={14}
                                name='clockcircle'
                                type='antdesign'
                                color={'#49B3BA'}
                            /> {horario}</Text>
                    </View>
                </View>
                <View style={{ justifyContent: "flex-end", height: 80 }}>
                    <Text fieldWidth="auto" margin="0" fontFamily="MontserratAlternates_500Medium" colorText="#C81D25" fontSize="12px">Cancelar</Text>
                </View>
            </SpacedContainer>
        </CardContainer>
    )
}