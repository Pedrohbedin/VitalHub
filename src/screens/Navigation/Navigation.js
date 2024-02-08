import { Button, View } from "react-native"

export const Navigation = ({ navigation }) => {
    return (
        <View>
            <Button
                title="Login"
                onPress={() => navigation.navigate("Login")}
            />
            <Button
                title="Esqueceu a senha"
                onPress={() => navigation.navigate("RecoverPassword")}
            />
            <Button
                title="Código de Email"
                onPress={() => navigation.navigate("EmailCode")}
            />
            <Button
                title="Nova senha"
                onPress={() => navigation.navigate("NewPassword")}
            />
            <Button
                title="Cadastrar"
                onPress={() => navigation.navigate("Singup")}
            />
            <Button
                title="Perfil"
                onPress={() => navigation.navigate("Perfil")}
            />

        </View>
    )
}