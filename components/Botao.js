import * as React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Button,
  StyleSheet,
  Image,
} from 'react-native';

export default function Botao({ valor, dados, cor, img }) {

// diferencia qual a cor do botão
  function escolhaBotao(e) {
    let corBotao;
    if (e == 'verde') {
      corBotao = styles.botaoVerde
    }else if(e == 'azul'){
      corBotao = styles.botaoAzul
    }else if(e == 'cinza'){
      corBotao = styles.botaoCinza
    } else if(e == 'grande'){
      corBotao = styles.botaoGrande
    } else if(e == 'grandeverde'){
      corBotao = styles.botaoGrandeVerde
    } else if(e == 'grandeazul'){
      corBotao = styles.botaoGrandeAzul
    } else{
      corBotao = styles.botao
    }
    return (
      <TouchableOpacity style={corBotao} onPress={dados}>
        <Text style={styles.texto}>{valor}</Text> 
        <Image source={img} />
      </TouchableOpacity>
    );
  }

  return (
    // pega cor pelo props e escolhe pela funçao a cor do botão
      escolhaBotao(cor)
      
    // <View>
      // {!cor ? (
      //   <TouchableOpacity style={styles.botao} onPress={dados}>
      //     {valor}
      //     <Image source={img} />
      //   </TouchableOpacity>
      // ) : cor == 'verde' ? (
      //   <TouchableOpacity style={styles.botaoVerde} onPress={dados}>
      //     {valor}
      //     <Image source={img} />
      //   </TouchableOpacity>
      // ) : (
      //   <TouchableOpacity style={styles.botao} onPress={dados}>
      //     {valor}
      //     <Image source={img} />
      //   </TouchableOpacity>
      // )}

    // </View>
  );
}

const styles = StyleSheet.create({
  botao: {
    width: 70,
    height: 70,
    backgroundColor: '#1C2E48',
    color: 'white',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  botaoVerde: {
    backgroundColor: '#219495',
    width: 70,
    height: 70,
    color: 'white',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  botaoCinza: {
    backgroundColor: '#7A9FE5',
    width: 70,
    height: 70,
    color: 'white',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  botaoAzul: {
    backgroundColor: '#7A9FE5',
    width: 70,
    height: 70,
    color: 'white',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  botaoGrande: {
    width: 110,
    height: 90,
    backgroundColor: '#1C2E48',
    color: 'white',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 18
  },
  botaoGrandeVerde: {
    backgroundColor: '#219495',
    width: 110,
    height: 70,
    color: 'white',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 18
  },
  botaoGrandeAzul: {
    backgroundColor: '#7A9FE5',
    width: 110,
    height: 70,
    color: 'white',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 18
  },
  texto: {
    color: '#fff',
    fontSize: 24,
  }
});