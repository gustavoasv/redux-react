import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "user",
  initialState: {
    name: "",
    idade: 0,
  },
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setAge: (state, action) => {
      state.idade = action.payload;
    },
  },
});

export const { setName, setAge } = slice.actions
export default slice.reducer;
