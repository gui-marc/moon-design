import {
  mauve,
  mauveA,
  mauveDark,
  mauveDarkA,
  violet,
  violetA,
  violetDark,
  violetDarkA,
} from "@radix-ui/colors";

import { createTheme } from "./stitches.config";

export const moonLight = createTheme({
  colors: {
    ...mauve,
    ...mauveA,
    ...violet,
    ...violetA,
  },
});

export const moonDark = createTheme({
  colors: {
    ...mauveDark,
    ...mauveDarkA,
    ...violetDark,
    ...violetDarkA,
  },
});
