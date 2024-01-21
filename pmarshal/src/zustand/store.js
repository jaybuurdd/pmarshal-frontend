import { create } from 'zustand';

const useStore = create(set => ({
    selectedWallet: null,
    setSelectedWallet: (wallet) => set({ selectedWallet: wallet }),
}))

export default useStore;