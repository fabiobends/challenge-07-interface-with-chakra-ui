import { extendTheme, Theme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

export const theme = extendTheme({
  colors: {
    yellow: "#FFBA08",
  },
  fonts: {
    heading: "Poppins",
    body: "Poppins",
  },
  styles: {
    global: (props) => ({
      body: {
        bg: mode("#fff", "#27383B")(props),
        color: mode("#47585B", "#F5F8FA")(props),
      },
    }),
  },
});
