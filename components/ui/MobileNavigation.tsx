import React from 'react'
import create from 'zustand'

// create IsInsideMobileNavigationContext
const IsInsideMobileNavigationContext = React.createContext(false);

// create useIsInsideMobileNavigation
export function useIsInsideMobileNavigation() {
  return React.useContext(IsInsideMobileNavigationContext);
}

export const useMobileNavigationStore = create((set) => ({
  isOpen: false,
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
  toggle: () => set((state: { isOpen: boolean }) => ({ isOpen: !state.isOpen })),
}))