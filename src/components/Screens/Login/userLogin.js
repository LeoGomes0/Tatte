import React from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import styles from "../../../styles/ScreenLogin/screenLogin";


function entrar() {
    alert("Entrou")
}

const Login = () => {

    return (

        <View style={styles.container}>

            <View style={{ flex: 1 }}></View>


            <View style={styles.viewMain}>


                <View style={styles.viewLogin}>
                    <Text style={styles.textLogin}>
                        Login
                    </Text>
                </View>


                <View style={styles.viewInput}>

                    <TextInput
                        style={styles.inputEmail}
                        placeholder="Ex.: tatte@gmail.com"
                        textAlign="center"
                        placeholderTextColor={"#ffcd5d"}
                    />
                    <TextInput
                        style={styles.inputSenha}
                        placeholder="Ex.: ***********"
                        textAlign="center"
                        placeholderTextColor={"#ffcd5d"}
                    />

                </View>


                <View style={styles.viewButton}>

                    <TouchableOpacity
                        style={styles.button}
                        onPress={entrar}
                    >
                        <Text style={{ color: "#fffbf4", fontWeight: "bold" }}>Login</Text>
                    </TouchableOpacity>
                </View>


            </View>

            <View style={{ flex: 0.3 }}></View>
        </View>

    );


}

export default Login;
