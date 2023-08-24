import parse from "html-react-parser";
import { FaTimes } from "react-icons/fa";

import { useAppDispatch } from "../../../hooks/redux";

import { readNote } from "../../../store/notesList/notesListSlice";

import { Note } from "../../../types/note";

import { Box } from "./ReadNoteModal.styles";
import { DeleteBox, FixedContainer } from "../Modal.styles";

interface ReadNoteModalProps {
  note: Note;
  type: string;
}

export default function ReadNoteModal({ note, type }: ReadNoteModalProps) {
  const dispatch = useAppDispatch();
  return (
    <FixedContainer>
      <Box style={{ backgroundColor: note.color }}>
        <DeleteBox
          onClick={() => dispatch(readNote({ type, id: note.id }))}
          className="readNote__close-btn"
        >
          <FaTimes />
        </DeleteBox>
        <div className="readNote__title">{note.title}</div>
        <div className="readNote__content">{parse(note.content)}</div>
      </Box>
    </FixedContainer>
  );
}
