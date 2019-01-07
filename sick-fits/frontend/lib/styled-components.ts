import * as styledComponents from "styled-components";
import { ThemedStyledComponentsModule } from "styled-components";

import { ThemeInterface } from "./theme";

const {
  default: styled,
  css,
  keyframes,
  injectGlobal,
  ThemeProvider
} = styledComponents as ThemedStyledComponentsModule<ThemeInterface>;

export { css, keyframes, ThemeProvider, injectGlobal };
export default styled;
