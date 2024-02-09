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
                onPress={() => navigation.navigate("EsqueceuSenha")}
            />
            <Button
                title="Código de Email"
                onPress={() => navigation.navigate("CodigoEmail")}
            />
            <Button
                title="Nova senha"
                onPress={() => navigation.navigate("NovaSenha")}
            />
            <Button
                title="Cadastrar"
                onPress={() => navigation.navigate("Cadastrar")}
            />
            <Button
                title="Perfil"
                onPress={() => navigation.navigate("Perfil")}
            />
            <Button
                title="Prontuario"
                onPress={() => navigation.navigate("Prontuario")}
            />
        </View>
    )
}