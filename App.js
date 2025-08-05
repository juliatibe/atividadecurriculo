import { StatusBar } from 'expo-status-bar';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';

export default function App() {
  return (
      <ScrollView>
        <Image source={require('./assets/imagem avatar.png')}
               style={styles.imagem}></Image>
        <Text style={styles.texto1}> {'\n'}Júlia de Almeida Tibério {'\n'}</Text>

        <View style={styles.quadrado}>
          <Text style={styles.texto2}>Me chamo Julia, nascida em Araçatuba,
            São Paulo. Estou em constante busca por aprendizado e crescimento
            profissional.</Text>
        </View>

        <Text style={styles.texto3}> {'\n'}FORMAÇÃO ACADÊMICA {'\n'}</Text>
        <View style={styles.quadrado2}>
          <Text style={styles.texto4}>
            Ensino Médio com Técnico em Desenvolvimento de Sistemas
            Escola SESI/SENAI – Previsão de conclusão: Dezembro de 2025
            Atualmente cursando o último ano.
          </Text>
        </View>

        <Text style={styles.texto3}> {'\n'}EXPERIÊNCIAS PROFISSIONAIS {'\n'}</Text>

        <View style={styles.quadrado3}>
          <Text style={styles.texto5}>
            Tenho experiência com criação de site, usando ferramentas como HTML, CSS.
            Também trabalhei em uma papelaria, onde atendia clientes, organizava produtos e
            ajudava nas tarefas do dia a dia.
          </Text>
        </View>

        <StatusBar style="auto" />

      </ScrollView>
  );
}

const styles = StyleSheet.create({

  imagem: {
    width: 200,
    height: 200,
    resizeMode: 'cover',
    alignSelf: 'center',
    borderRadius: 100,
  },
  texto1: {
    color: '#f86254',
    fontSize: 25,
    textAlign: 'center',
  },

  texto2: {
    color: 'black',
    fontSize: 20,
    textAlign: 'center',
  },
  quadrado: {
    backgroundColor: '#f9d9ac',
    borderRadius: 6,
    margin: 5,

  },

  texto3: {
    color: '#fe495f',
    fontSize: 25,
    textAlign: 'center',
  },

  quadrado2: {
    backgroundColor: '#f9d9ac',
    borderRadius: 6,
    marginLeft: 10,
    marginRight: 10,
  },

  texto4: {
    color: 'black',
    fontSize: 20,
    textAlign: 'center',
  },
  quadrado3: {
    backgroundColor: '#f9d9ac',
    borderRadius: 6,
    marginLeft: 10,
    marginRight: 10,
  },
  texto5: {
    color: 'black',
    fontSize: 20,
    textAlign: 'center',
  }

});

