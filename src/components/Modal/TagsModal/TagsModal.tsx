import { FormEvent, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { v4 } from "uuid";

import { addTags, deleteTags } from "../../../store/tags/tagSlice";
import { removeTags } from "../../../store/notesList/notesListSlice";
import { toggleTagsModal } from "../../../store/modal/modalSlice";

import getStandardName from "../../../utils/getStandardName";

import { FaTimes } from "react-icons/fa";

import { FixedContainer, DeleteBox } from "../Modal.styles";
import { Box, StyledInput, TagsBox } from "./TagsModal.styles";

interface TagsModalProps {
  type: string;
}

export default function TagsModal({ type }: TagsModalProps) {
  const dispatch = useAppDispatch();
  const [inputText, setInputText] = useState<string>("");

  const { tagsList } = useAppSelector((state) => state.tags);

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!inputText) {
      return;
    }

    dispatch(addTags({ tag: inputText.toLocaleLowerCase(), id: v4() }));
    setInputText("");
  };

  const deleteTagsHandler = (tag: string, id: string) => {
    dispatch(deleteTags(id));
    dispatch(removeTags({ tag }));
  };

  return (
    <FixedContainer>
      <Box>
        <div className="editTags__header">
          <div className="editTags__title">
            {type === "add" ? "ADD" : "Edit"} Tags
          </div>
          <DeleteBox
            className="editTags__close"
            onClick={() => dispatch(toggleTagsModal({ type, view: false }))}
          >
            <FaTimes />
          </DeleteBox>
        </div>

        <form onSubmit={submitHandler}>
          <StyledInput
            type="text"
            value={inputText}
            placeholder="New Tag..."
            onChange={(e) => setInputText(e.target.value)}
          />
        </form>
        <TagsBox>
          {tagsList.map(({ tag, id }) => (
            <li key={id}>
              <div className="eidtTags__tag">{getStandardName(tag)}</div>
              <DeleteBox onClick={() => deleteTagsHandler(tag, id)}>
                <FaTimes />
              </DeleteBox>
            </li>
          ))}
        </TagsBox>
      </Box>
    </FixedContainer>
  );
}
