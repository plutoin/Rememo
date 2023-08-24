import parse from "html-react-parser";
import { BsFillPinFill } from "react-icons/bs";

import { Note } from "../../types/note";

import getRelevantBtns from "../../utils/getRelevantBtns";

import { useAppDispatch } from "../../hooks/redux";

import { readNote, setPinnedNotes } from "../../store/notesList/notesListSlice";

import { NotesIconBox } from "../../styles/styles";
import {
  Card,
  ContentBox,
  FooterBox,
  TagsBox,
  TopBox,
} from "./NoteCard.styles";
import { ReadNoteModal } from "..";

interface NoteCardProps {
  note: Note;
  type: string;
}

export default function NoteCard({ note, type }: NoteCardProps) {
  const dispatch = useAppDispatch();
  const { title, content, tags, color, priority, date, isPinned, isRead, id } =
    note;

  const func = () => {
    const imgContent = content.includes("img");

    if (imgContent) {
      return content;
    } else {
      return content.length > 75 ? content.slice(0, 75) + "..." : content;
    }
  };

  return (
    <>
      {isRead && <ReadNoteModal type={type} note={note} />}
      <Card style={{ background: color }}>
        <TopBox>
          <div className="noteCard__title">
            {title.length > 10 ? title.slice(0, 10) + "..." : title}
          </div>
          <div className="noteCard__top-options">
            <span className="noteCard__priority">{priority}</span>
            {type !== "archive" && type !== "trash" && (
              <NotesIconBox
                className="noteCard__pin"
                onClick={() => dispatch(setPinnedNotes({ id }))}
              >
                <BsFillPinFill style={{ color: isPinned ? "salmon" : "" }} />
              </NotesIconBox>
            )}
          </div>
        </TopBox>
        <ContentBox onClick={() => dispatch(readNote({ type, id }))}>
          {parse(func())}
        </ContentBox>
        <TagsBox>
          {tags.map(({ tag, id }) => (
            <span key={id}>{tag}</span>
          ))}
        </TagsBox>
        <FooterBox>
          <div className="noteCard__date">{date}</div>
          <div>{getRelevantBtns(type, note, dispatch)}</div>
        </FooterBox>
      </Card>
    </>
  );
}
