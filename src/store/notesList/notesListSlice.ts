import { createSlice } from "@reduxjs/toolkit";

interface NoteState {
  mainNotes: [];
  archiveNotes: [];
  trashNotes: [];
  editNote: null;
}

const initialState: NoteState = {
  mainNotes: [],
  archiveNotes: [],
  trashNotes: [],
  editNote: null,
};

const notesListSlice = createSlice({
  name: "noteList",
  initialState,
  reducers: {},
});

export default notesListSlice.reducer;
