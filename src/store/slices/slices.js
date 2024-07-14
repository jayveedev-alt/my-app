export const createCounterSlice = (set) => ({
    counter: 0,
    increaseCounter: () => set((state) => ({ counter: state.counter + 1 })),
    decreaseCounter: () => set((state) => ({ counter: state.counter - 1 })),
    setCounter: (value) => set(() => ({ counter: value })),
});