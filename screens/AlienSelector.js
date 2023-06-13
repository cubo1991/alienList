import React, { useState } from 'react';
import { View, Button, StyleSheet, Text } from 'react-native';
import { alienList } from '../store/alienList';
import { playerList } from '../store/playerList';

const AlienSelector = () => {
  const [selectedPlayerIndex, setSelectedPlayerIndex] = useState(null);
  const players = playerList((store) => store.players);
  const aliens = alienList((store) => store.aliens);

  const toggleAliensRevealed = (playerIndex) => {
    if (selectedPlayerIndex === playerIndex) {
      setSelectedPlayerIndex(null); // Deselect the player if already selected
    } else {
      setSelectedPlayerIndex(playerIndex);
    }
  };

  const assignAliensToPlayers = () => {
    const availableAliens = [...aliens]; // Create a copy of the aliens array

    // Shuffle the available aliens array randomly
    for (let i = availableAliens.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [availableAliens[i], availableAliens[j]] = [availableAliens[j], availableAliens[i]];
    }

    const updatedPlayers = players.map((player) => {
      const randomAliens = availableAliens.splice(0, 2); // Take the first two aliens from the shuffled array
      return { ...player, aliens: randomAliens };
    });

    playerList.getState().setPlayers(updatedPlayers);
    setSelectedPlayerIndex(null); // Deselect the player after assigning aliens
  };

  const getPlayerColorStyle = (color) => {
    return { backgroundColor: color };
  };

  const getAlienColorStyle = (color) => {
    return { backgroundColor: color };
  };

  return (
    <View style={styles.container}>
      {players.map((player, index) => {
        console.log(`Rendering player ${index}`);
        const playerColorStyle = getPlayerColorStyle(player.color);
        return (
          <View key={index} style={[styles.playerContainer, playerColorStyle]}>
            <Text style={styles.playerName}>{player.name}</Text>
            <View style={styles.aliensContainer}>
              {player.aliens.map((alien, alienIndex) => {
                console.log(`Rendering alien ${alien.Nombre}`);
                const alienColorStyle = getAlienColorStyle(alien.color);
                const isSelectedPlayer = selectedPlayerIndex === index;
                const alienItemStyle = [
                  styles.alienItem,
                  alienColorStyle,
                  isSelectedPlayer && styles.selectedAlienItem, // New style for selected alien
                ];
                return (
                  <View key={alienIndex} style={alienItemStyle}>
                    {isSelectedPlayer ? (
                      <Text style={[styles.alienText, styles.selectedAlienText]}>{alien.Nombre}</Text>
                    ) : (
                      <Button
                        title="Mostrar"
                        onPress={() => toggleAliensRevealed(index)}
                        color="#262525"
                      />
                    )}
                  </View>
                );
              })}
            </View>
          </View>
        );
      })}
      <Button
        title="Asignar Aliens"
        onPress={assignAliensToPlayers}
        disabled={selectedPlayerIndex !== null}
        color="#262525"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5E5E5',
    padding: 10,
  },
  playerContainer: {
    marginBottom: 10,
    padding: 10,
    borderRadius: 5,
  },
  playerName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#262525',
  },
  aliensContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  alienItem: {
    backgroundColor: '#262525',
    padding: 10,
    borderRadius: 5,
    marginBottom: 5,
  },
  selectedAlienItem: {
    backgroundColor: '#FFFFFF', // New style for selected alien
  },
  alienText: {
    color: '#000000',
  },
  selectedAlienText: {
    color: '#262525', // New style for selected alien text
    fontWeight:'bold'
  },
});

export default AlienSelector;
