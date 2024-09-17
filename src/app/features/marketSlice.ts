import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../app/store'

// Define a type for the slice state
interface CounterState {
    category: string
}

// Define the initial state using that type
const initialState: CounterState = {
    category: "",
}

export const marketSlice = createSlice({
    name: 'market',
    initialState,
    reducers: {
        setCategory: (state, action: PayloadAction<string>) => {
            state.category = action.payload
        },
    },
})

export const { setCategory } = marketSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const Selectcategory = (state: RootState) => state.market

export default marketSlice.reducer