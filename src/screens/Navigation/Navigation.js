import { Button, View } from "react-native"

export const Navigation = ({ navigation }) => {
    return (
        <View style={{paddingTop: 40}}>
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
            <Button
                title="Home"
                onPress={() => navigation.navigate("Home")}
            />
            <Button
                title="Clinica"
                onPress={() => navigation.navigate("Clinica")}
            />
            <Button
                title="Medico"
                onPress={() => navigation.navigate("Medico")}
            />
            <Button
                title="Data"
                onPress={() => navigation.navigate("Data")}
            />
            <Button
                title="Main"
                onPress={() => navigation.navigate("Main")}
            />
        </View>
    )
}