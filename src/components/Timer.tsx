import React from "react";
import { Text, View, StyleSheet } from "react-native";

// EL COMPONENTE TIME RECIBE UNA PROP LLAMADA "time" QUE REPRESENTA EL TIEMPO RESTANTE EN SEGUNDOS.
const Time = ({ time }) => {
    // CONVIERTE EL TIEMPO EN SEGUNDOS EN UNA CADENA FORMATEADA EN MINUTOS Y SEGUNDOS (POR EJEMPLO, "25:05").
    const formattedTime = `${Math.floor(time / 60)
        .toString()
        .padStart(2, "0")}:${(time % 60).toString()
        .padStart(2, "0")}`

    return (
        <View style={styles.container}>
            {/* MUESTRA EL TIEMPO FORMATEADO EN UN ELEMENTO TEXT. */}
            <Text style={styles.time}>{formattedTime}</Text>
        </View>
    );
};

// ESTILOS PARA EL COMPONENTE TIME.
const styles = StyleSheet.create({
    container: {
        flex: 0.3,
        backgroundColor: "#F2F2F2",
        padding: 15,
        borderRadius: 15,
    },
    time: {
        fontSize: 80,
        fontWeight: "bold",
        textAlign: "center",
        color: "#333333",
    }
})

export default Time;
