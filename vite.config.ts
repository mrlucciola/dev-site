import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { pigment, type PigmentOptions } from "@pigment-css/vite-plugin";
import { darkTheme } from "./src/mui/theme";

const pigmentConfig: PigmentOptions = {
  transformLibraries: ["@mui/material"],
  theme: darkTheme,
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), pigment(pigmentConfig)],
});
