// import type DefaultPropsProvider from "@mui/material/DefaultPropsProvider";
import type { SimplePaletteColorOptions } from "@mui/material/styles/createPalette";
import { type Components } from "@mui/material/styles/components";
import { type Theme } from "@mui/material/styles/createTheme";

export type CustomComponentOverrides = Components<Omit<Theme, "components">>; // export type DefaultPropsProviderProps = Parameters<typeof DefaultPropsProvider>[0]["value"];

export type CustomOptions<TCustom> = { [key in keyof Partial<TCustom>]: SimplePaletteColorOptions };

/** #### This needs to be applied to each component that should receive custom color options
 * Example:
 * ```ts
 * declare module "@mui/material/Button" {
 *   interface ButtonPropsColorOverrides extends CustomOptionsTrue<CustomPalette> {}
 * }
 * ```
 */
export type CustomOptionsTrue<TCustom> = { [key in keyof Partial<TCustom>]: true };
