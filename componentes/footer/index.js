import React from 'react';
import { View, Text, StyleSheet } from "react-native";

export default function Footer() {
    return (
        <View style={styles.container}>
            <Text style={styles.tituloPrincipal}>ETEC Cidade Tiradentes</Text>
            <Text style={styles.tituloPrincipal}>DESENVOLVEDORES</Text>
            <View style={styles.colunaContainer}>
                <View style={styles.coluna}>
                    <Text style={styles.devs}>Luiz Fernando</Text>
                    <Text style={styles.devs}>Nycollas Kelvin</Text>
                </View>
                <View style={styles.coluna}>
                    <Text style={styles.devs}>Daniel Costa</Text>
                    <Text style={styles.devs}>Rafael Aguilar</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
        flexDirection: 'column',
        backgroundColor: 'black',
        padding: 10,
        width: "100%",
        justifyContent: 'center'
    },
    tituloPrincipal: {
        textAlign: 'center',
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    colunaContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    coluna: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    devs: {
        textAlign: 'center',
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    }
})
