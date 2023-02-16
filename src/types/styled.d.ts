import "styled-components"

interface Width {
  mobile: string
  desktop: string
}

interface Colors {
  softBlue: string
  cyan: string
  mainBG: string
  cardBG: string
  line: string
  white: string
}

interface Font {
  fontSize: string
  family: string
}

declare module 'styled-components' {
  export interface DefaultTheme {
    width: Width;
    colors: Colors;
    font: Font;
  }
}
