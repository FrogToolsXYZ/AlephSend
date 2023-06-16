/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class", '[data-mode="dark"]'],
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      textColor: {
        text: {
          primary: "rgb(var(--text-primary))",
          secondary: "rgb(var(--text-secondary))",
          disabled: "rgb(var(--text-disabled))",
        },
      },
      colors: {
        primary: { DEFAULT: "rgb(var(--primary) / <alpha-value>)", contrast: "var(--primary-contrast)" },
        secondary: { DEFAULT: "rgb(var(--secondary) / <alpha-value>)", contrast: "var(--secondary-contrast)" },
        divider: "rgb(var(--divider) / <alpha-value>)",
        action: {
          active: "rgb(var(--action-active))",
          hover: "rgb(var(--action-hover))",
          selected: "rgb(var(--action-selected))",
          disabled: "rgb(var(--action-disabled))",
          focus: "rgb(var(--action-focus))",
        },
      },
      opacity: {
        active: "var(--action-active-opacity)",
        hover: "var(--action-hover-opacity)",
        selected: "var(--action-selected-opacity)",
        disabled: "var(--action-disabled-opacity)",
        focus: "var(--action-focus-opacity)",
      },
    },
  },
};
