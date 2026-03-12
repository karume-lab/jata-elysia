import { createTheme, type MantineColorsTuple } from "@mantine/core";

const black: MantineColorsTuple = [
  "#f2f2f2",
  "#dbdbdb",
  "#adadad",
  "#7d7d7d",
  "#575757",
  "#3d3d3d",
  "#262626",
  "#141414",
  "#0a0a0a",
  "#000000",
];

export const theme = createTheme({
  colors: {
    black,
  },
  primaryColor: "black",
  defaultRadius: "md",
  fontFamily: "Inter, system-ui, sans-serif",
});
