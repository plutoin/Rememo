import { useParams } from "react-router-dom";

import { Note } from "../../types/note";

import { useAppSelector } from "../../hooks/redux";

import { MainWrapper } from "../../components";

import { Container, EmptyMsgBox } from "../../styles/styles";

export default function TagNotes() {
  const { name } = useParams() as { name: string };

  const { mainNotes } = useAppSelector((state) => state.notesList);

  const notes: Note[] = [];
  mainNotes.forEach((note) => {
    if (note.tags.find(({ tag }) => tag === name)) {
      notes.push(note);
    }
  });

  return (
    <Container>
      {notes.length === 0 ? (
        <EmptyMsgBox>NO NOTES</EmptyMsgBox>
      ) : (
        <MainWrapper notes={notes} type={name} />
      )}
    </Container>
  );
}
