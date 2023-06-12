import React from 'react';
import { View, Text } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';

export default function CardAlien({
  _id,
  Nombre,
  Poder,
  Dificultad,
  Expansion,
  Descripcion,
}) {
  return (
    <Card style={{ marginVertical: 10 }}>
      <Card.Content>
        <Title>{Nombre}</Title>
        <Paragraph>Poder: {Poder}</Paragraph>
        <Paragraph>Dificultad: {Dificultad}</Paragraph>
        <Paragraph>Expansion: {Expansion}</Paragraph>
        <Paragraph>Descripción: {Descripcion}</Paragraph>
      </Card.Content>
    </Card>
  );
}
