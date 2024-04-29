import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

export default function Banner(){
  return (
    <View style={styles.container}>
      <Image
        source={require('./banner.png')}
        style={styles.imagem}
        resizeMode='contain'
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    aspectRatio: 1,
    maxHeight: 300,
    borderWidth: 1,
    backgroundColor: 'black',
  },
  imagem: {
    width: '100%',
    height: '100%',
  },
});
