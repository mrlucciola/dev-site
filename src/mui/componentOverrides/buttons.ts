import type {} from "@mui/lab/themeAugmentation";
// interfaces
import type { DefaultPropsProviderProps } from "../palette/interfaces";

export const MuiButton: DefaultPropsProviderProps["MuiButton"] = {
  variant: "contained",
  sx: {
    textTransform: "none",
  },
};

export const MuiLoadingButton: DefaultPropsProviderProps["MuiLoadingButton"] = {
  ...MuiButton,
};
