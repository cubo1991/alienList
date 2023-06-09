import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { alienList } from '../store/alienList'
import CardAlien from '../componentes/CardAlien'



export default function AlienList() {
   
let aliens = alienList((store) => store.aliens)
    let aliensMap = aliens.map((alien) => {
        return(
            <CardAlien _id = {alien._Id}  Nombre={alien.Nombre} Poder={alien.Poder} Dificultad={alien.dificultad} Expansion={alien.Expansión} Descripcion={alien.Descripción}/>
        )

    })
    console.log(aliens)
  return (
    <View>
      {aliensMap}
    </View>
  )
}