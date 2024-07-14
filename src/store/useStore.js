import create from 'zustand';
import { devtools, combine } from 'zustand/middleware';
import { createCounterSlice } from './slices/slices';

const useStore = create(
    devtools((set, get) => ({
        ...createCounterSlice(set, get),
    }))
);

export default useStore;
