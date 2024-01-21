import { create } from 'zustand';

const useStore = create(set => ({
  transactions: [],
  setTransactions: (newTransactions) => set({ transactions: newTransactions })
}));

export default useStore;
