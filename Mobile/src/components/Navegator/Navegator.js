import { TouchableOpacity } from "react-native"
import { Footer } from "./style"
import { Icon } from "react-native-elements"

export const Navegator = ({ tipoConta = "", onAction, visible }) => {

    return tipoConta == "Dr" ? (
        <>

        </>
    )
        :
        (
            <Footer style={visible ? { opacity: 1 } : { opacity: 0 }} JustifyContent="flex-end" padding="15px" tipoConta={tipoConta}>
                <TouchableOpacity onPress={onAction}>
                    <Icon
                        disabled={!visible}
                        containerStyle={{ backgroundColor: "#49B3BA", width: 60, height: 60, justifyContent: "center", borderRadius: 7, elevation: 20 }}
                        type="font-awesome"
                        name="stethoscope"
                        size={27}
                        color="#FBFBFB"
                    />
                </TouchableOpacity>
            </Footer>
        )

    // Navegator Pa
}