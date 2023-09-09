import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

// UN ARRAY QUE CONTIENE LAS OPCIONES DE TIEMPO PARA EL TEMPORIZADOR.
const options = ["Pomodoro", "Short Break", "Long Break"];

// EL COMPONENTE HEADER RECIBE TRES PROPS: SETTIME (PARA CAMBIAR EL TIEMPO DEL TEMPORIZADOR), CURRENTTIME (PARA RASTREAR LA OPCIÓN DE TIEMPO ACTUAL) Y SETCURRENTTIME (PARA ACTUALIZAR LA OPCIÓN DE TIEMPO ACTUAL).
const Header = ({ setTime, currentTime, setCurrentTime }) => {
    // FUNCIÓN PARA MANEJAR EL CLIC EN UNA DE LAS OPCIONES DE TIEMPO.
    const handlePress = (index) => {
        // CALCULA EL NUEVO TIEMPO EN SEGUNDOS SEGÚN LA OPCIÓN SELECCIONADA.
        const newTime = index === 0 ? 25 : index === 1 ? 5 : 15;
        setCurrentTime(index); // ACTUALIZA LA OPCIÓN DE TIEMPO ACTUAL.
        setTime(newTime * 60); // CONVIERTE EL TIEMPO A SEGUNDOS Y LO ESTABLECE COMO NUEVO TIEMPO EN EL TEMPORIZADOR.
    }

    return (
        <View style={{ flexDirection: "row" }}>
            {/* MAPEA LAS OPCIONES Y CREA UN BOTÓN (TOUCHABLEOPACITY) PARA CADA UNA. */}
            {options.map((item, index) => (
                <TouchableOpacity
                    key={index}
                    onPress={() => handlePress(index)} // LLAMA A LA FUNCIÓN HANDLEPRESS CUANDO SE PRESIONA EL BOTÓN.
                    style={[
                        styles.itemStyle,
                        currentTime !== index && { borderColor: "transparent" }, // CAMBIA EL BORDE SI LA OPCIÓN NO ESTÁ SELECCIONADA.
                    ]}
                >
                    <Text style={{ fontWeight: "bold" }}>
                        {item}
                    </Text>
                </TouchableOpacity>
            ))}
        </View>
    );
};

// ESTILOS PARA EL COMPONENTE HEADER.
const styles = StyleSheet.create({
    itemStyle: {
        width: "33%",
        alignItems: "center",
        borderWidth: 3,
        padding: 5,
        borderRadius: 10,
        borderColor: "white",
        marginVertical: 20,
    }
})

export default Header; // EXPORTA EL COMPONENTE HEADER.
