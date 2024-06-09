import React from 'react';
import { View,Text,StyleSheet } from "react-native";
import { Ionicons } from '@expo/vector-icons';

export default function Header(){
    return( 
        <View style={styles.container}>
            <Text style={styles.titulo}>SUPLEMENTEC</Text>
            <Ionicons name="menu-outline" size={32} color="white" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 30,
        flexDirection: 'row',
        backgroundColor: 'black',
        padding: 10,
        width: "100%",
        justifyContent: 'space-between'
    },
    titulo: {
        textAlign: 'center',
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
    }
})