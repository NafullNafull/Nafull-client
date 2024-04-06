import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    layout: {
      width: number;
      paddingX: number;
    };
    color: {
      gray_0: string;
      gray_50: string;
      gray_100: string;
      gray_200: string;
      gray_300: string;
      gray_400: string;
      gray_500: string;
      gray_600: string;
      gray_700: string;
      gray_800: string;
      gray_900: string;

      cream: string;

      orange: string;

      blue_100: string;
      blue_200: string;
      blue_300: string;

      green_100: string;
      green_200: string;
      green_300: string;

      red_100: string;
      red_200: string;
      red_300: string;
    };
  }
}
