import { css } from 'styled-components';

const Title1 = css`
  font-size: 28px;
  font-weight: bold;
  line-height: 1.4;
`;
const Title2 = css`
  font-size: 24px;
  font-weight: 600;
  line-height: 1.4;
`;
const Title3 = css`
  font-size: 36px;
  font-weight: 700;
  line-height: 1.4;
`;
const Subtitle1 = css`
  font-size: 20px;
  font-weight: 600;
  line-height: 1.4;
`;
const Subtitle2 = css`
  font-size: 16px;
  font-weight: 600;
  line-height: 1.4;
`;
const Subtitle3 = css`
  font-size: 16px;
  font-weight: normal;
  line-height: 1.4;
`;
const Body1 = css`
  font-size: 14px;
  font-weight: 600;
  line-height: 1.4;
`;
const Body2 = css`
  font-size: 14px;
  font-weight: normal;
  line-height: 1.4;
`;
const Body3 = css`
  font-size: 12px;
  font-weight: normal;
  line-height: 1.4;
`;
const styles = {
  Title1,
  Title2,
  Title3,
  Subtitle1,
  Subtitle2,
  Subtitle3,
  Body1,
  Body2,
  Body3,
};

export type TypographyVariant = keyof typeof styles;
export default styles;
