export const theme = {
  layout: {
    width: 375,
    paddingX: 30,
  },
  color: {
    gray_0: '#FFFFFF',
    gray_50: '#F5F5F5',
    gray_100: '#EEEEEE',
    gray_200: '#CCCCCC',
    gray_300: '#B5B5B5',
    gray_400: '#9E9E9E',
    gray_500: '#878787',
    gray_600: '#707070',
    gray_700: '#595959',
    gray_800: '#424242',
    gray_900: '#141414',

    cream: '#F7F3EE',

    orange: '#EC5636',

    blue_100: '#E9F2FC',
    blue_200: '#92BDF2',
    blue_300: '#5493E1',

    green_100: '#CCEEDC',
    green_200: '#80D3A7',
    green_300: '#00A850',

    red_100: '#FEDDE1',
    red_200: '#FCA9B5',
    red_300: '#F1304A',
  },
};

export type ColorAlias = keyof (typeof theme)['color'];
export const colors = theme.color;
