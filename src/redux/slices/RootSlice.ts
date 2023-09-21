import { createSlice } from '@reduxjs/toolkit'

const rootSlice = createSlice({
    name: "root",
    initialState: {
        brand: "Brand",
        color: "Color",
        region: "region",
        alcohol: "alcohol",
        price: "price",
    },
    reducers: {
        chooseBrand: (state, action) => { state.brand = action.payload},
        chooseColor: (state, action) => { state.color = action.payload},
        chooseRegion: (state, action) => { state.region = action.payload},
        chooseAlcohol: (state, action) => { state.alcohol = action.payload},
        choosePrice: (state, action) => { state.price = action.payload}
    }
})

export const reducer = rootSlice.reducer;
export const { chooseBrand, chooseColor, chooseRegion, chooseAlcohol, choosePrice} = rootSlice.actions