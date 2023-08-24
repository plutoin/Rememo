import { Dispatch } from "react";
import ReactQuill from "react-quill";

import { Container } from "./TextEditor.styles";
import "react-quill/dist/quill.snow.css";

interface TextEditorProps {
  value: string;
  setValue: Dispatch<React.SetStateAction<string>>;
  color: string;
}

const formats = [
  "bold",
  "italic",
  "underline",
  "strike",
  "list",

  "color",
  "background",

  "image",
  "blockquote",
  "code-block",
];

const modules = {
  toolbar: [
    [{ list: "ordered" }, { list: "bullet" }],
    [],
    ["italic", "underline", "strike"],
    [],
    [{ color: [] }, { background: [] }],
    [],
    ["image", "blockquote", "code-block"],
  ],
};

export default function TextEditor({
  color,
  value,
  setValue,
}: TextEditorProps) {
  return (
    <Container noteColor={color}>
      <ReactQuill
        formats={formats}
        modules={modules}
        theme="snow"
        value={value}
        onChange={setValue}
      />
    </Container>
  );
}
