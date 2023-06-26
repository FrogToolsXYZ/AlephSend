"use client";

import { tags as t } from "@lezer/highlight";
import { zebraStripes } from "@uiw/codemirror-extensions-zebra-stripes";
import { createTheme } from "@uiw/codemirror-themes";
import CodeMirror from "@uiw/react-codemirror";

// https://uiwjs.github.io/react-codemirror/#/editor/theme/single

const myTheme = createTheme({
  theme: "dark",
  settings: {
    background: "#ffffff",
    foreground: "#4D4D4C",
    caret: "#AEAFAD",
    selection: "#D6D6D6",
    selectionMatch: "#D6D6D6",
    gutterBackground: "#FFFFFF",
    gutterForeground: "#4D4D4C",
    gutterBorder: "#dddddd",
    gutterActiveForeground: "",
    lineHighlight: "#EFEFEF",
  },
  styles: [{ tag: t.integer, color: "#692adf" }],
});

export const TextArea = () => {
  return (
    <CodeMirror
      placeholder={`frog.azero, 9001`}
      height="200px"
      theme={myTheme}
      extensions={[zebraStripes({ step: 2, lightColor: "#aca2ff33", darkColor: "#aca2ff40" })]}
      onChange={(value, viewUpdate) => {
        console.log("value:", value);
      }}
    />
  );
};
