import { ButtonTabsStyle, ButtonTextStyle } from "./style"

export const BtnListAppointment = ({
    textButton,
    clickButton = false,
    onPress,
    borderColor = "",
    colorText = "",
    backgroundColor = ""
}) => {
    return (
        <ButtonTabsStyle backgroundColor={backgroundColor} borderColor={borderColor} clickButton={clickButton} onPress={onPress}>
            <ButtonTextStyle colorText={colorText} clickButton={clickButton}>{textButton}</ButtonTextStyle>
        </ButtonTabsStyle>
    )
}