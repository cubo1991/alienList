import { View, Text } from 'react-native'
import React from 'react'

const CardAlien = ({_id, Nombre, Poder, Dificultad, Expansión, Descripción}) => {
  return (
    <View key={_id}>
      <Text>`Nombre: ${Nombre}`</Text>
      <Text>`Poder: ${Poder}`</Text>
      <text>`Descripción: ${Descripción}`</text>
      <Text>`Dificultad: ${Dificultad}`</Text>
      <text>`Expansion: ${Expansión}`</text>
    </View>
  )
}

export default CardAlien