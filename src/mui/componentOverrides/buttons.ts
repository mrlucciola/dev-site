import type { LabComponents } from "@mui/lab/themeAugmentation";
import type {} from "@mui/lab/themeAugmentation";
// interfaces
import type { CustomComponentOverrides, CustomOptionsTrue } from "../palette/interfaces";
import type { CustomPalette } from "../palette";

export const MuiButton: CustomComponentOverrides["MuiButton"] = {
  defaultProps: {},

  styleOverrides: {
    root: {
      textTransform: "none",
      textDecoration: "none",
      fontSize: 14,
      fontWeight: 600,
    },
  },
};

export const MuiLoadingButton: LabComponents["MuiLoadingButton"] = {
  defaultProps: {
    ...MuiButton.defaultProps,
  },
  styleOverrides: {
    ...MuiButton.styleOverrides,
  },
};

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides extends CustomOptionsTrue<CustomPalette> {}
}
