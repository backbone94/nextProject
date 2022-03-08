import { EditorState, convertToRaw, ContentState } from "draft-js";
import "draft-js/dist/Draft.css";
import { EditorProps } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { useEffect, useState } from "react";
import styled from "styled-components";
import draftToHtml from "draftjs-to-html";
import htmlToDraft from "html-to-draftjs";
import dynamic from "next/dynamic";

export const MyBlock = styled.div`
  .wrapper-class {
    margin: 0 auto;
  }
  .editor {
    height: 150px !important;
    border: 1px solid #f1f1f1 !important;
    padding: 5px !important;
    border-radius: 2px !important;
  }
`;

const Editor = dynamic<EditorProps>(
  () => import("react-draft-wysiwyg").then((mod) => mod.Editor),
  { ssr: false }
);

const DraftEditor = ({ initialState, setContent }) => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  // draft를 html로 변환
  const editorToHtml = draftToHtml(
    convertToRaw(editorState.getCurrentContent())
  );

  useEffect(() => {
    // html를 draft로 변환
    const blocksFromHtml = htmlToDraft(initialState);
    if (blocksFromHtml) {
      const { contentBlocks, entityMap } = blocksFromHtml;
      const contentState = ContentState.createFromBlockArray(
        contentBlocks,
        entityMap
      );
      const result = EditorState.createWithContent(contentState);
      setEditorState(result);
    }
    // eslint-disable-next-line
  }, []);

  setContent(editorToHtml);

  return (
    <>
      <MyBlock>
        <Editor
          toolbar={{
            list: { inDropdown: true },
            textAlign: { inDropdown: true },
            link: { inDropdown: true },
            history: { inDropdown: false },
          }}
          toolbarClassName="toolbar-class"
          editorClassName="editor"
          wrapperClassName="wrapper-class"
          placeholder="내용을 작성해주세요."
          editorState={editorState}
          onEditorStateChange={(editorState: EditorState) =>
            setEditorState(editorState)
          }
        />
      </MyBlock>
    </>
  );
};

export default DraftEditor;
