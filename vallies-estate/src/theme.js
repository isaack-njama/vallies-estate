import { extendTheme } from "@chakra-ui/react";

const CustomTheme = extendTheme({
  fonts: {
    body: "Space Grotesk Variable, sans-serif",
    heading: "Poppins, sans-serif",
    mono: "Menlo, monospace",
  },
});

export default CustomTheme;
