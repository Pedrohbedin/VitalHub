import { TouchableWithoutFeedback, View } from "react-native"
import { CardContainer, SpacedContainer } from "../Container/Style"
import { CardImage } from "../Image/style"
import { Title } from "../Title/style"
import { Text } from "../Text/style"
import { Icon } from "react-native-elements"
import { TouchableOpacity } from "react-native"

export const Card = ({
    data,
    onAction,
    onClick,
    urlFotoPaciente = "https://thumbs.dreamstime.com/b/retrato-exterior-do-doutor-masculino-35801901.jpg"
}) => {
    return (
        <TouchableWithoutFeedback onPress={() => onClick()}>
            <CardContainer
                style={{
                    marginVertical: 20,
                    marginHorizontal: 20, flexDirection: 'row', alignItems: 'center'
                }}>
                <SpacedContainer>
                    <View style={{ gap: 10, flexDirection: 'row', alignItems: 'center' }}>
                        <CardImage source={{ uri: `${urlFotoPaciente}`, }} />
                        <View style={{ gap: 7, alignItems: "center", padding: 0, flexDirection: "column" }}>
                            <Title fieldWidth="100%" textAlign="left" margin="0">{data.nome}</Title>
                            <View style={{ flexDirection: 'row', gap: 15 }}>
                                <Text margin="0px" fieldWidth="auto">{data.idade} anos</Text>

                                <Text margin="0px" fieldWidth="auto">{`\u2022 ${data.tipoConsulta}`}</Text>
                            </View>
                            <Text margin="0" colorText={data.situacao == "agendadas" ? '#49B3BA' : '#4E4B59'} fieldWidth="100px" textAlign="center" backgroundColor={data.situacao == "agendadas" ? '#E8FCFD' : '#F1F0F5'} borderRadius="5px">
                                <Icon
                                    size={14}
                                    name='clockcircle'
                                    type='antdesign'
                                    color={data.situacao == "agendadas" ? '#49B3BA' : '#4E4B59'}
                                /> {data.horario}</Text>
                        </View>
                    </View>
                    <View style={{ justifyContent: "flex-end", height: 80 }}>
                        <TouchableOpacity onPress={onAction}>
                            <Text fieldWidth="auto" margin="0" fontFamily="MontserratAlternates_500Medium" colorText={data.situacao == "agendadas" ? "#C81D25" : "#344F8F"} fontSize="12px">
                                {
                                    data.situacao == "agendadas" ? "Cancelar" :
                                        data.situacao == "realizadas" ? "Ver prontuário" : ""
                                }
                            </Text>
                        </TouchableOpacity>
                    </View>
                </SpacedContainer>
            </CardContainer>
        </TouchableWithoutFeedback>
    )
}

export function CardClinica({ data, borderColor, onPress }) {

    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <CardContainer borderColor={borderColor} style={{
                marginVertical: 20,
                marginHorizontal: 20
            }} flexDirection="row">
                <View style={{ flex: 1, justifyContent: "flex-start" }}>
                    <Title textAlign="left">{data.nome}</Title>
                    <Text textAlign="left">{data.local}</Text>
                </View>
                <View>
                    <Text fieldWidth="auto" textAlign="right" fontFamily="Quicksand_600SemiBold" colorText="#F9A620">
                        <Icon size={14} name='star' type='antdesign'
                            color={"#F9A620"}
                        /> {data.nota}</Text>
                    <Text borderRadius="5px" padding="5px" fieldWidth="auto" backgroundColor="#E8FCFD" colorText="#49B3BA" fontFamily="Quicksand_600SemiBold">
                        <Icon size={14} name='calendar' type='antdesign'
                            color={"#49B3BA"}
                        /> {data.dias}</Text>
                </View>
            </CardContainer >
        </TouchableWithoutFeedback>
    )
}

export function CardMedico({ data, borderColor, onPress, urlFotoPaciente = "https://thumbs.dreamstime.com/b/retrato-exterior-do-doutor-masculino-35801901.jpg" }) {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <CardContainer borderColor={borderColor} style={{
                marginVertical: 20,
                marginHorizontal: 20
            }} flexDirection="row">
                <View style={{ flex: 1 }}>
                    <CardImage source={{ uri: `${urlFotoPaciente}`, }} />
                </View>
                <View style={{ flex: 2 }}>
                    <Title textAlign="left" fieldWidth="auto">{data.nome}</Title>
                    <Text textAlign="left" colorText="#8C8A97" fieldWidth="auto" fontFamily="Quicksand_600SemiBold">{data.especialidade}</Text>
                </View>
            </CardContainer >
        </TouchableWithoutFeedback>
    )
}

