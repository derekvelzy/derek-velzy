import { create } from 'zustand'

type State = {
    portfolioAnimationsCompleted: boolean;
}

type Actions = {
    setPortfolioAnimationsCompleted: (portfolioAnimationsCompleted: boolean) => void;
};

export const usePortfolioState = create<State & Actions>((set) => ({
    portfolioAnimationsCompleted: false,
    setPortfolioAnimationsCompleted: (portfolioAnimationsCompleted) => set({ portfolioAnimationsCompleted }),
}));
