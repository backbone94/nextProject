const EditorToolbar = ({ handleTogggleClick, handleBlockClick }) => {
  return (
    <div>
      <button onMouseDown={(e) => handleBlockClick(e, "header-one")}>h1</button>
      <button onMouseDown={(e) => handleBlockClick(e, "header-two")}>h2</button>
      <button onMouseDown={(e) => handleBlockClick(e, "header-three")}>
        h3
      </button>
      <button onMouseDown={(e) => handleBlockClick(e, "unstyled")}>
        normal
      </button>
      <button onMouseDown={(e) => handleTogggleClick(e, "BOLD")}>bold</button>
      <button onMouseDown={(e) => handleTogggleClick(e, "ITALIC")}>
        italic
      </button>
      <button onMouseDown={(e) => handleTogggleClick(e, "STRIKETHROUGH")}>
        strikthrough
      </button>
      <button onMouseDown={(e) => handleBlockClick(e, "ordered-list-item")}>
        ol
      </button>
      <button onMouseDown={(e) => handleBlockClick(e, "unordered-list-item")}>
        ul
      </button>
    </div>
  );
};

export default EditorToolbar;
