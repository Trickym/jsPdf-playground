import React, { useState } from "react";
import { Editor } from "@monaco-editor/react";
import _ from "lodash";
function CustomEditor({ unsavedCode, handleUnSavedCode, dark }) {
  const handleEditorDidMount = (editor, monaco) => {
    window._ = _;
  };
  return (
    <Editor
      onMount={handleEditorDidMount}
      theme={dark ? "vs-dark" : "light"}
      className="h-dvh border-gray-400 dark:border-gray-500 border border-l-0"
      defaultLanguage="javascript"
      defaultValue={unsavedCode}
      value={unsavedCode}
      onChange={handleUnSavedCode}
      options={{
        fontSize: "14px",
        acceptSuggestionOnCommitCharacter: true,
        acceptSuggestionOnEnter: "on",
        accessibilitySupport: "auto",
        autoIndent: false,
        automaticLayout: true,
        codeLens: true,
        colorDecorators: true,
        contextmenu: true,
        cursorBlinking: "blink",
        cursorSmoothCaretAnimation: false,
        cursorStyle: "line",
        disableLayerHinting: false,
        disableMonospaceOptimizations: false,
        dragAndDrop: false,
        fixedOverflowWidgets: false,
        folding: true,
        foldingStrategy: "auto",
        fontLigatures: false,
        formatOnPaste: false,
        formatOnType: false,
        hideCursorInOverviewRuler: false,
        highlightActiveIndentGuide: true,
        links: true,
        mouseWheelZoom: false,
        multiCursorMergeOverlapping: true,
        multiCursorModifier: "alt",
        overviewRulerBorder: true,
        overviewRulerLanes: 2,
        quickSuggestions: true,
        quickSuggestionsDelay: 100,
        readOnly: false,
        renderControlCharacters: false,
        renderFinalNewline: true,
        renderIndentGuides: true,
        renderLineHighlight: "all",
        renderWhitespace: "none",
        revealHorizontalRightPadding: 30,
        roundedSelection: true,
        rulers: [],
        scrollBeyondLastColumn: 5,
        scrollBeyondLastLine: true,
        selectOnLineNumbers: true,
        selectionClipboard: true,
        selectionHighlight: true,
        showFoldingControls: "mouseover",
        smoothScrolling: false,
        suggestOnTriggerCharacters: true,
        wordBasedSuggestions: true,
        wordSeparators: "~!@#$%^&*()-=+[{]}|;:'\",.<>/?",
        wordWrap: "off",
        wordWrapBreakAfterCharacters: "\t})]?|&,;",
        wordWrapBreakBeforeCharacters: "{([+",
        wordWrapBreakObtrusiveCharacters: ".",
        wordWrapColumn: 80,
        wordWrapMinified: true,
        wrappingIndent: "none",
      }}
    />
  );
}

export default CustomEditor;
