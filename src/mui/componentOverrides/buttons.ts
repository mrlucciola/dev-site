import type { LabComponents } from "@mui/lab/themeAugmentation";
import type {} from "@mui/lab/themeAugmentation";
// interfaces
import type { CustomComponentOverrides } from "../palette/interfaces";

export const MuiButton: CustomComponentOverrides["MuiButton"] = {
  defaultProps: {
    variant: "contained",
    sx: {
      textTransform: "none",
    },
  },
};

export const MuiLoadingButton: LabComponents["MuiLoadingButton"] = {
  defaultProps: {
    ...MuiButton.defaultProps,
  },
};
