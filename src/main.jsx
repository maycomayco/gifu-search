import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import App from "./App";

// remove to external file
const styles = {
  global: () => ({
    body: {
      bg: "gray.900",
      color: "gray.50",
    },
  }),
};

const theme = extendTheme({ styles });

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
