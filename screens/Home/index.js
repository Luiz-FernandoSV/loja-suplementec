import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Header from '../../componentes/navbar';
import Banner from '../../componentes/banner';
import CardProduto from '../../componentes/cardProduto';
import produtos from '../../data/produtos.js';
import Footer from '../../componentes/footer/index.js';

export default function Home() {
    // Função para dividir os produtos em grupos de 2
    const arrayAgrupado = (array, tamanho) => {
        const arrayCortado = [];
        for (let i = 0; i < array.length; i += tamanho) {
            arrayCortado.push(array.slice(i, i + tamanho));
        }
        return arrayCortado;
    };

    // Dividindo os produtos em grupos de 2
    const ProdutosDuo = arrayAgrupado(produtos, 2);

    return (
        <View style={styles.container}>
            <Header />

            <ScrollView style={styles.scrollview} centerContent={true}>
            <Banner />
            <Text style={styles.titulo}>Produtos</Text>
                {/* Mapeando os grupos de produtos e criando linhas */}
                {ProdutosDuo.map((row, index) => (
                    <View key={index} style={styles.row}>
                        {/* Mapeando os produtos em cada linha */}
                        {row.map((produto) => (
                            <CardProduto key={produto.id} produto={produto} />
                        ))}
                    </View>
                ))}

                <Footer />
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 0
    },
    scrollview:{
        backgroundColor: '#f0f0f0',
        
    },
    titulo: {
        width: '100%',
        fontSize: 25,
        marginBottom: 5,
        fontWeight: 'bold',
        backgroundColor: 'black',
        color: 'white',
        textAlign: 'center'
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
});
