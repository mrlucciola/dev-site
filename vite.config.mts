import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { pigment, type PigmentOptions } from "@pigment-css/vite-plugin";
import { darkTheme } from "./src/mui/theme";

const pigmentConfig: PigmentOptions = {
  transformLibraries: ["@mui/material"],
  theme: darkTheme,
};

const pigmentPlugin = pigment(pigmentConfig);
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      jsxImportSource: "@emotion/react",
      plugins: [["@swc/plugin-styled-components", {}]],
      devTarget: "esnext",
    }),
    pigmentPlugin,
  ],
});
