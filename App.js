import {Button, Platform, SafeAreaView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useEffect, useState} from "react"

// IMPORTA COMPONENTES PERSONALIZADOS.
import Header from "./src/components/Header";
import Time from "./src/components/Timer";
import ButtonAction from "./src/components/ButtonAction";

// DEFINE COLORES PARA DIFERENTES ESTADOS DE TIEMPO.
const colors = ["#fccc92", "#92f8fc", "#92a4fc",]

// FUNCIÓN PRINCIPAL DE LA APLICACIÓN.
export default function App() {
    // DECLARACIÓN DE ESTADOS PARA LA APLICACIÓN.

    // Indica si se está en el período de trabajo.
    const [isWorking, setIsWorking] = useState(false);

    // Indica si el temporizador está en funcionamiento.
    const [isActive, setIsActive] = useState(false);

    // Tiempo restante en segundos, inicializado en 25 minutos.
    const [time, setTime] = useState(25 * 60);

    // Estado actual del temporizador (POMO, SHORT, o BREAK).
    const [currentTime, setCurrentTime] = useState("POMO" | "SHORT" | "BREAK");

    // EFECTO SECUNDARIO PARA MANEJAR LA LÓGICA DEL TEMPORIZADOR.
    useEffect(() => {
        let interval = null
        if (isActive) {
            // Iniciar un intervalo para actualizar el tiempo restante cada segundo.
            interval = setInterval(() => {
                setTime(time - 1)
            }, 1000)
        } else {
            // Detener el intervalo si el temporizador no está activo.
            clearInterval(interval)
        }

        // Comprobar si el tiempo ha llegado a cero.
        if (time == 0) {
            setIsActive(false); // Detener el temporizador.
            setIsWorking((prev) => !prev); // Cambiar entre trabajo y descanso.
            setTime(isWorking ? 300 : 1500); // Configurar el tiempo para el próximo período.
        }

        // Limpiar el intervalo cuando el componente se desmonta o cambian las dependencias.
        return () => clearInterval(interval)
    }, [isActive, time])

    // RENDERIZAR LA INTERFAZ DE USUARIO.
    return (
        <SafeAreaView style={[styles.container, {backgroundColor: colors[currentTime]}]}>
            <View style={styles.view}>
                <Text style={styles.text}>Pomodoro</Text>

                {/* COMPONENTES REUTILIZABLES */}


                <Header setTime={setTime} currentTime={currentTime} setCurrentTime={setCurrentTime}/>

                <Time time={time}/>

                <ButtonAction setIsActive={setIsActive} isActive={isActive}/>
            </View>
        </SafeAreaView>
    );
}

// ESTILOS DE LA APLICACIÓN.
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    text: {fontSize: 30, fontWeight: "bold"},
    view: {
        flex: 1,
        paddingTop: Platform.OS === "android" && 30,
        paddingHorizontal: 20,
    }
});
