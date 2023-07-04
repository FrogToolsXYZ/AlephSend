"use client";

import { tags as t } from "@lezer/highlight";
import { zebraStripes } from "@uiw/codemirror-extensions-zebra-stripes";
import { createTheme } from "@uiw/codemirror-themes";
import CodeMirror from "@uiw/react-codemirror";

// https://uiwjs.github.io/react-codemirror/#/editor/theme/single

const myTheme = createTheme({
  theme: "dark",
  settings: {
    /** Editor background. */
    background: "#111b24", //0
    /** Default text color. */
    foreground: "#01ebc7", //1
    /** Caret color. */
    caret: "#6BABE3", //2
    /** Selection background. */
    selection: "#2F4B63", //1
    /** Selection match background. */
    selectionMatch: "#1080E3", //3
    /** Background of highlighted lines. */
    // lineHighlight?: string;
    /** Gutter background. */
    gutterBackground: "#111b24", //0
    /** Text color inside gutter. */
    gutterForeground: "#33bca7", //2
    /** Text active color inside gutter. */
    gutterActiveForeground: "#fff",
    /** Gutter right border color. */
    gutterBorder: "#5F98C9", //3
    /** set editor font */
    // fontFamily?: string;
  },
  styles: [{ tag: t.integer, color: "#692adf" }],
});

export const TextArea = () => {
  return (
    <CodeMirror
      placeholder={`frog.azero, 9001`}
      height="260px"
      theme={myTheme}
      extensions={[zebraStripes({ step: 2, lightColor: "#aca2ff33", darkColor: "#aca2ff40" })]}
      onChange={(value, viewUpdate) => {
        console.log("value:", value);
      }}
    />
  );
};
