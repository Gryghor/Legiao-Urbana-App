import { Text, SafeAreaView, StyleSheet, ScrollView } from 'react-native';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import Musica1 from './components/musica1.js';
import Musica2 from './components/musica2.js';
import Musica3 from './components/musica3.js';
import Musica4 from './components/musica4.js';
import Botaozinho from './components/botaozinho.js';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
      <Text style={styles.nomezinho}>
        Gryghor Camonni (3ºB)
      </Text>

      <Text style={styles.paragraph}>
        Top músicas de
      </Text>
      <Text style={styles.paragraph2}>
        Legião Urbana
      </Text>
      <Card>
        <Musica1 />
        <Musica2 />
        <Musica3 />
        <Musica4 />
        <Botaozinho />
      </Card>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#0F1015',
    padding: 8,
  },

  nomezinho: {
    marginTop: 40,
    fontSize: 18,
    padding: 12,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#FBD8A5',
    color: '#0F1015',

  },

  paragraph: {
    marginTop: 40,
    fontSize: 35,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#FBD8A5',
  },

  paragraph2: {
    marginTop: 10,
    marginBottom: 30,
    fontSize: 35,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#FBD8A5',
  }
});
