import { useAppSelector } from "../../hooks/redux";

import { MainWrapper } from "../../components";

import { Container, EmptyMsgBox } from "../../styles/styles";

export default function ArchiveNotes() {
  const { archiveNotes } = useAppSelector((state) => state.notesList);

  return (
    <Container>
      {archiveNotes.length === 0 ? (
        <EmptyMsgBox>NO NOTES</EmptyMsgBox>
      ) : (
        <MainWrapper notes={archiveNotes} type="archive" />
      )}
    </Container>
  );
}
