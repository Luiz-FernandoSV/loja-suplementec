import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'


export default function Produto({ route }) {

  const navigation = useNavigation();

  const { produto } = route.params
  return (
    <View style={styles.containerGeral}>

      <TouchableOpacity style={styles.btnVoltar} onPress={() =>navigation.navigate('Home')}>
        <Text style={styles.textoVoltar}>Retornar aos produtos</Text>
      </TouchableOpacity>

      <View style={styles.container}>
        <View style={styles.cardDetalhes}>
          <View style={styles.content}>
            <Text style={styles.titulo}>{produto.marca}</Text>
            <Image
              source={{ uri: produto.imagem }}
              style={styles.imagem}
            />
          </View>
          <Text style={styles.descricao}>{produto.nome}</Text>
          <Text style={styles.preco}>R${produto.preco.toFixed(2)}</Text>
          <Text style={styles.descricao}>{produto.descricao}</Text>
          <Text style={styles.quantidade}>{produto.quantidade}</Text>

          <TouchableOpacity style={styles.btnComprar}>
            <Text style={styles.textoComprar}>Comprar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerGeral: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center'
  },
  btnVoltar: {
    margin: 5,
    backgroundColor: '#222',
    borderRadius: 5,
    width: '50%',
  },
  textoVoltar: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center'
  },
  cardDetalhes: {
    marginTop: 30,
    width: 400,
    height: 200,
    padding: 20,
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  content: {
    alignItems: 'center',
    fontSize: 30
  },
  titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10
  },
  imagem: {
    width: 250,
    height: 250
  },
  descricao: {
    fontWeight: 'bold',
    fontSize: 20,
    marginLeft: 20
  },
  nome: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10
  },
  preco: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#27ae60',
    marginBottom: 10
  },
  descricao: {
    fontSize: 18,
    marginBottom: 10
  },
  quantidade: {
    fontSize: 18,
    color: '#95a5a6',
    marginBottom: 10
  },
  btnComprar: {
    backgroundColor: '#27ae60',
    padding: 20,
    borderRadius: 10
  },
  textoComprar: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold'
  }
});
