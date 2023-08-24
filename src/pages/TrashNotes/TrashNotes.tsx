import { useAppSelector } from "../../hooks/redux";

import { MainWrapper } from "../../components";

import { Container, EmptyMsgBox } from "../../styles/styles";

export default function TrashNotes() {
  const { trashNotes } = useAppSelector((state) => state.notesList);

  return (
    <Container>
      {trashNotes.length === 0 ? (
        <EmptyMsgBox>NO NOTES</EmptyMsgBox>
      ) : (
        <MainWrapper notes={trashNotes} type="trash" />
      )}
    </Container>
  );
}
