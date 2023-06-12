import React, { useEffect, useState } from 'react';
import { alienList } from '../store/alienList';
import CardAlien from '../componentes/CardAlien';
import { View, StyleSheet, TextInput } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  searchInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default function AlienList() {
  const [searchName, setSearchName] = useState('');
  const aliens = alienList((store) => store.aliens);

  // Filtrar los aliens por nombre
  const filteredAliens = aliens.filter((alien) =>
    alien.Nombre.toLowerCase().includes(searchName.toLowerCase())
  );

  const aliensMap = filteredAliens.map((alien) => (
    <CardAlien
      key={alien._id}
      _id={alien._id}
      Nombre={alien.Nombre}
      Poder={alien.Poder}
      Dificultad={alien.Dificultad}
      Expansion={alien.Expansión}
      Descripcion={alien.Descripción}
    />
  ));

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Buscar alien por nombre"
        value={searchName}
        onChangeText={setSearchName}
      />
     <ScrollView>{aliensMap}</ScrollView> 
    </View>
  );
}
