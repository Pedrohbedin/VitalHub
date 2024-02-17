import { TouchableOpacity, View } from "react-native";
import { CardContainer, Container, SpacedContainer } from "../../components/Container/Style";
import { Header } from "../../components/Container/Style";
import { CardImage, HeaderImage } from "../../components/Image/style";
import { Text } from "../../components/Text/style";
import { BorderedButtonTitle, ButtonTitle, MiddleTitle, Title } from "../../components/Title/style";
import { Icon } from "react-native-elements";
import { BorderedButton, Button } from "../../components/Button/style";
import CalendarList from "../../components/Calender";


export const Home = () => {

    return (
        <>
            {/* <StatusBar /> */}
            <Container>
                <Header>
                    <SpacedContainer style={{ padding: 10 }}>
                        <View style={{ flexDirection: "row", gap: 10 }}>
                            <HeaderImage source={{ uri: 'https://thumbs.dreamstime.com/b/retrato-exterior-do-doutor-masculino-35801901.jpg', }} />
                            <View style={{ gap: -20 }}>
                                <Text style={{ textAlign: 'left' }}>Bem vindo</Text>
                                <MiddleTitle style={{ color: 'white', width: 'auto' }}>Dr. Claudio</MiddleTitle>
                            </View>
                        </View>
                        <Icon
                            size={25}
                            name='bell'
                            type='material-community'
                            color={'white'}
                        />
                    </SpacedContainer>
                </Header>
                <CalendarList />
                <SpacedContainer>
                    <Button style={{ width: 'auto' }}>
                        <ButtonTitle colorText="#FFFFFF" style={{ textTransform: 'capitalize' }}>Agendadas</ButtonTitle>
                    </Button>
                    <BorderedButton style={{ width: 'auto' }}>
                        <BorderedButtonTitle colorText="#607EC5" style={{ textTransform: 'capitalize' }}>Realizadas</BorderedButtonTitle>
                    </BorderedButton>
                    <BorderedButton style={{ width: 'auto' }}>
                        <BorderedButtonTitle colorText="#607EC5" style={{ textTransform: 'capitalize' }}>Canceladas</BorderedButtonTitle>
                    </BorderedButton>
                </SpacedContainer>
                <CardContainer style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <SpacedContainer>
                        <View style={{ gap: 10, flexDirection: 'row', alignItems: 'center' }}>
                            <CardImage source={{ uri: 'https://thumbs.dreamstime.com/b/retrato-exterior-do-doutor-masculino-35801901.jpg', }} />
                            <View style={{ gap: 7, alignItems: "center", padding: 0, flexDirection: "column" }}>
                                <Title margin="0">Richard Kosta</Title>
                                <View style={{ flexDirection: 'row', gap: 15 }}>
                                    <Text margin="0px" fieldWidth="auto">22 anos</Text>
                                    <Text margin="0px" fieldWidth="auto">Rotina</Text>
                                </View>
                                <Text margin="0" colorText="##49B3BA" fieldWidth="100px" textAlign="center" style={{ backgroundColor: '#E8FCFD', borderRadius: 5 }}><Icon
                                    size={14}
                                    name='clockcircle'
                                    type='antdesign'
                                    color={'#49B3BA'}
                                /> 14:00</Text>
                            </View>
                        </View> 
                        <View style={{justifyContent: "flex-end", height: 80}}>
                            <Text fieldWidth="auto" margin="0" fontFamily="MontserratAlternates_500Medium" colorText="#C81D25" fontSize="12px">Cancelar</Text>
                        </View>
                    </SpacedContainer>
                </CardContainer>
            </Container>
        </>
    )
}