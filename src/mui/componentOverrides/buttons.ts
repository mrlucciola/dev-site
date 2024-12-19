import type {} from "@mui/lab/themeAugmentation";
// interfaces
import type { DefaultPropsProviderProps } from "../palette/interfaces";

export const MuiButton: DefaultPropsProviderProps["MuiButton"] = {
  variant: "contained",
  color: "primary",
  sx: {
    textTransform: "none",
    fontSize: 14,
    fontWeight: 600,
    borderRadius: 16,
  },
};

export const MuiLoadingButton: DefaultPropsProviderProps["MuiLoadingButton"] = {
  ...MuiButton,
};
