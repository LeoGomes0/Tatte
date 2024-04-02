import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fffbca"
    },

    viewMain: {
        flex: 2.5,
        width: "90%",
        justifyContent: "center",
        backgroundColor: "#fffbf4",
        alignItems: "center",
        borderTopLeftRadius: 100,
        borderBottomRightRadius: 100
    },

    viewLogin: {
        flex: 1,
        marginTop: "28%",
    },

    textLogin: {
        fontSize: 30,
        color: "#ffcd5d"
    },

    viewInput: {
        flex: 2,
    },

    inputEmail: {
        borderRadius: 10,
        borderWidth: 0.5,
        borderColor: "#ffcd5d",
        height: 40,
        padding: 10,
        alignItems: "center",
        fontSize: 17
    },

    inputSenha: {
        borderRadius: 10,
        borderWidth: 0.5,
        borderColor: "#ffcd5d",
        width: 300,
        height: 40,
        padding: 10,
        marginTop: "4%",
        fontSize: 17
    },

    viewButton: {
        flex: 2
    },

    button: {
        marginBottom: "60%",
        borderWidth: 0.5,
        borderRadius: 20,
        width: 300,
        height: 40,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ffcd5d",
        borderColor: "#fffbca"
    },


});

export default styles;