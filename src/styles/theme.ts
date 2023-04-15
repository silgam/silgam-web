import { DefaultTheme } from "styled-components";

const color = {
  primary: "#283593",
  grey: {
    50: "#f5f5f5",
    100: "#e9e9e9",
    200: "#d9d9d9",
    300: "#c4c4c4",
    400: "#9d9d9d",
    500: "#7b7b7b",
    600: "#555555",
    700: "#434343",
    800: "#262626",
    900: "#000000",
  },
};

export const defaultTheme: DefaultTheme = {
  color: color,
  header: {
    height: "60px",
  },
  footer: {
    backgroundColor: "#191b28",
    textColor: color.grey[400],
  },
  contentMaxWidth: "1050px",
};
