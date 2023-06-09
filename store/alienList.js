import { create } from 'zustand';

export const alienList = create((set) => ({
  aliens: [],
  setAliens: (newAliens) => set({ aliens: newAliens }),
}));
