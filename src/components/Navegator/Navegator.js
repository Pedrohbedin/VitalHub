import { Icon } from "react-native-elements";
import { Text } from "../Text/style";
import { Footer } from "./style";
import { useIsFocused } from "@react-navigation/native";
import { FooterButton } from "./style";

export const Navegator = ({ clickButton = false }) => {
    const isFocused = useIsFocused();
    return (
        <Footer>
            <FooterButton clickButton={clickButton}>
                <Text fieldWidth="auto" margin="0" colorText={clickButton ? "#4E4B59" : "#607EC5"} fontSize="24px" fontFamily="Quicksand_500Medium">
                    <Icon size={22}
                        name='calendar'
                        type='feather'
                        color={clickButton ? "#4E4B59" : "#607EC5"}
                    />{isFocused ? 'Agenda' : ''}</Text>
            </FooterButton>
            <FooterButton clickButton={clickButton}>
                <Text clickButton={clickButton} fieldWidth="auto" margin="0" colorText={clickButton ? "#4E4B59" : "#607EC5"}>
                    <Icon size={22}
                        name='local-hospital'
                        type='materialIcons'
                        // color={isFocused ? '#607EC5' : "#4E4B59"}
                        color={clickButton ? "#4E4B59" : "#607EC5"}
                    /></Text>
            </FooterButton>
            <FooterButton clickButton={clickButton}>
                <Text clickButton={clickButton} fieldWidth="auto" margin="0" colorText={clickButton ? "#4E4B59" : "#607EC5"}>
                    <Icon size={22}
                        name='person-circle-outline'
                        type='ionicon'
                        // color={isFocused ? '#607EC5' : "#4E4B59"}
                        color={clickButton ? "#4E4B59" : "#607EC5"}
                    /></Text>
            </FooterButton>
        </Footer>
    )
}