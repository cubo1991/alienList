import create from 'zustand';

export const playerList = create((set) => ({
  players: [
    { name: 'Rojo', color:'#FF0000', aliens: [] },
    { name: 'Azul', color:'#0000FF', aliens: [] },
    { name: 'Naranja', color:'#FFA500', aliens: [] },
    { name: 'Blanco', color:'#FFFFFF', aliens: [] },
    { name: 'Negro', color:'#000000', aliens: [] },
    { name: 'Amarillo', color:'#FFFF00', aliens: [] },
    { name: 'Violeta', color:'#EE82EE', aliens: [] },
    { name: 'Verde', color:'#008000', aliens: [] },
  ],

  setPlayers: (newPlayers) => set({ players: newPlayers }),
}));
