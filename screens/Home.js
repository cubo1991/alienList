import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'




const Home = ({navigation}) => {

  return (
    <View>
      <Button
      title= "Buscar alien"
      onPress={() => navigation.navigate('Aliens')}
      />
      <Button
      title= "Seleccion de aliens"
      onPress={() => navigation.navigate('Selección de Alien')}
      />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})