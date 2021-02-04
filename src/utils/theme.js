import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

const defaultPalette = {
  primaryColorMain: "#414040",
  secondaryColorMain: "#301934",
  secondaryColorLight: "#919AA2",
  backgroundColorDefault: "#f4f5fa",
  backgroundColorPaper: "#fff",
  textPrimaryColor: "#000",
  textSecondaryColor: "#545454",
  textDisabledColor: "#808080",
};

let theme = createMuiTheme({
  palette: {
    primary: {
      main: defaultPalette.primaryColorMain,
      dark: "#101010",
      light: "#515050",
    },
    secondary: {
      main: defaultPalette.secondaryColorMain,
      light: defaultPalette.secondaryColorLight,
      dark: "#101b33",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: defaultPalette.backgroundColorDefault,
      paper: defaultPalette.backgroundColorPaper,
    },
    text: {
      primary: defaultPalette.textPrimaryColor,
      secondary: defaultPalette.textSecondaryColor,
      disabled: defaultPalette.textDisabledColor,
    },
  },
  typography: {
    // fontFamily: "PT sans, sans-serif",
    fontFamily: "Montserrat, sans-serif",
  },
});

theme = responsiveFontSizes(theme);

export default theme;
