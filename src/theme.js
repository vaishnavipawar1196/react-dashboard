import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: "#F3F3F7",
      },
    },
  },

  components: {
    Tabs: {
      baseStyle: {
        tab: {
          _selected: {
            color: "purple",
            fontWeight: 'bold',
          },
        },
      },
    },
  },

});

export default theme;
