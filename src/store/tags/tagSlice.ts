import { createSlice } from "@reduxjs/toolkit";
import { v4 } from "uuid";

const initialState = {
  tagsList: [
    { tag: "learnings", id: v4() },
    { tag: "work", id: v4() },
    { tag: "quotes", id: v4() },
  ],
};

const tagSlice = createSlice({
  name: "tags",
  initialState,
  reducers: {},
});

export default tagSlice.reducer;
