import type {} from "@mui/lab/themeAugmentation";
// component-themes
import { MuiButton, MuiLoadingButton } from "./buttons";
import type { CustomComponentOverrides } from "../palette/interfaces";

export const componentDefaults: CustomComponentOverrides = {
  MuiButton,
  MuiLoadingButton,
};
