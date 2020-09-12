import { createMuiTheme, colors } from "@material-ui/core";
import { ColorValues, Modes } from "./colors";

export const recreateMuiTheme = (
  mode = Modes.DARK,
  pcolor = ColorValues.DEEPORANGE,
  scolor = ColorValues.PINK
) => {
  return createMuiTheme({
    palette: {
      type: mode,
      primary: colors[pcolor],
      secondary: colors[scolor]
    }
  });
};
