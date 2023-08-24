import { Note } from "../../types/note";

import NoteCard from "../NoteCard/NoteCard";

import { NotesContainer } from "../../styles/styles";

interface MainWrapperProps {
  notes: Note[];
  type: string;
}

export default function MainWrapper({ notes, type }: MainWrapperProps) {
  return (
    <NotesContainer>
      {notes.map((note) => (
        <NoteCard key={note.id} note={note} type={type} />
      ))}
    </NotesContainer>
  );
}
