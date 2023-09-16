import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

export default function AssetExample() {
  return (
    <View style={styles.container}>
     <TouchableOpacity style={styles.button} >
        <Text style={styles.texto}>Veja mais músicas</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 11,
    backgroundColor: '#0F1015',
    color: '#0F1015',
  },
  
  button: {
    alignItems: 'center',
    padding: 10,
    width: 270,
    margin: 15,
    marginBottom: 60,
    backgroundColor: '#FBD8A5',
    color: '#0F1015',
    fontWeight: 'bold',
  },

  texto:{
    fontWeight: 'bold',
    fontSize: 20,
  }
});
