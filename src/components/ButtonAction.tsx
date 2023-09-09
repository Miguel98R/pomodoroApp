import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { Audio } from "expo-av";

// EL COMPONENTE BUTTONACTION RECIBE DOS PROPS: ISACTIVE (INDICANDO SI EL TEMPORIZADOR ESTÁ ACTIVO) Y SETISACTIVE (UNA FUNCIÓN PARA CAMBIAR EL ESTADO DEL TEMPORIZADOR).
const ButtonAction = ({ isActive, setIsActive }) => {
    // FUNCIÓN PARA REPRODUCIR UN SONIDO CUANDO SE HACE CLIC EN EL BOTÓN.
    const playSound = async () => {
        // CREA Y REPRODUCE UN SONIDO UTILIZANDO EL MÓDULO AUDIO DE EXPO.
        const { sound } = await Audio.Sound.createAsync(
            require("../../assets/clcik.mp3") // SE UTILIZA UN ARCHIVO DE SONIDO "clcik.mp3" EN LA CARPETA DE ACTIVOS.
        );
        await sound.playAsync(); // REPRODUCE EL SONIDO DE MANERA ASÍNCRONA.
    }

    // FUNCIÓN PARA MANEJAR EL INICIO O DETENCIÓN DEL TEMPORIZADOR Y REPRODUCIR EL SONIDO.
    const handleStartStop = async () => {
        await playSound(); // LLAMA A LA FUNCIÓN PLAY SOUND PARA REPRODUCIR EL SONIDO.
        await setIsActive(!isActive); // CAMBIA EL ESTADO DEL TEMPORIZADOR ENTRE ACTIVO E INACTIVO.
    }

    return (
        <View>
            {/* UN TOUCHABLEOPACITY QUE ENVUELVE UN TEXTO ("START" O "STOP") Y ACTÚA COMO UN BOTÓN. */}
            <TouchableOpacity onPress={handleStartStop} style={styles.button}>
                <Text style={styles.text}>{isActive ? "STOP" : "START"}</Text>
            </TouchableOpacity>
        </View>
    );
};

// ESTILOS PARA EL COMPONENTE BUTTONACTION.
const styles = StyleSheet.create({
    text: {
        color: "white",
        fontWeight: "bold",
    },
    button: {
        alignItems: "center",
        backgroundColor: "#333333",
        padding: 15,
        marginTop: 15,
        borderRadius: 15,
    }
});

export default ButtonAction;
