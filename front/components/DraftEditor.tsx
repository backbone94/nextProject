import { Editor, EditorState, RichUtils, DraftEditorCommand } from "draft-js";
// import Editor from '@draft-js-plugins/editor'
import "draft-js/dist/Draft.css";
import { useState } from "react";
import styled from "styled-components";
import EditorToolbar from "./EditorToolbar";

export const MyBlock = styled.div`
  .wrapper-class {
    width: 70%;
    margin: 0 auto;
    margin-bottom: 4rem;
  }
  .editor {
    height: 150px !important;
    border: 1px solid #f1f1f1 !important;
    padding: 5px !important;
    border-radius: 2px !important;
  }
`;

const DraftEditor = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const handleTogggleClick = (e: React.MouseEvent, inlineStyle: string) => {
    e.preventDefault();
    setEditorState(RichUtils.toggleInlineStyle(editorState, inlineStyle));
  };
  const handleBlockClick = (e: React.MouseEvent, blockType: string) => {
    e.preventDefault();
    setEditorState(RichUtils.toggleBlockType(editorState, blockType));
  };

  return (
    <MyBlock>
      <EditorToolbar
        handleTogggleClick={handleTogggleClick}
        handleBlockClick={handleBlockClick}
      />
      <Editor
        placeholder="내용을 작성해주세요."
        editorState={editorState}
        onChange={(editorState) => setEditorState(editorState)}
      />
    </MyBlock>
  );
};

export default DraftEditor;
