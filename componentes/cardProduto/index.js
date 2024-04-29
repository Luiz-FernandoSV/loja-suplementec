import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function CardProduto({ produto }) {

    return (
        <View style={styles.container} >
            <Text style={styles.marca}>{produto.marca}</Text>
            <Image source={{ uri: produto.imagem }} style={styles.imagem} />
            <View style={styles.conteudo}>
                <Text style={styles.nome}>{produto.nome}</Text>
                <Text style={styles.preco}>R$ {produto.preco.toFixed(2)}</Text>
                <Text style={styles.descricao}>{produto.descricao}</Text>
                <Text style={styles.quantidade}>{produto.quantidade}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        padding: 10,
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        margin: 2,
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 3,
        width: '50%', // Alterei para um valor numérico
    },
    imagem: {
        width: '90%',
        borderRadius: 10,
        aspectRatio: 1
    },
    conteudo: {
        flex: 1,
        marginLeft: 10,
    },
    marca: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    nome: {
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    preco: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#27ae60',
        marginBottom: 5,
    },
    descricao: {
        fontSize: 14,
        marginBottom: 5,
    },
    quantidade: {
        fontSize: 12,
        color: '#95a5a6',
    },
});
