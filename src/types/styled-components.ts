import "styled-components";

interface ColorPalette {
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
}

declare module "styled-components" {
  export interface DefaultTheme {
    color: {
      primary: string;
      grey: ColorPalette;
    };
    header: {
      height: string;
      heightMobile: string;
    };
    footer: {
      backgroundColor: string;
      textColor: string;
    };
    width: {
      contentMax: string;
    };
  }
}
