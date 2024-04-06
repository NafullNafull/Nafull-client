import styled from 'styled-components';
import styles, { TypographyVariant } from './styles';
import React, { ElementType } from 'react';
import { ColorAlias, colors } from '../../theme/theme';
import { FontFamilyVariants } from '../../theme/GlobalStyle';

export interface TypographyProps
  extends React.PropsWithChildren,
    React.HTMLProps<
      HTMLAnchorElement & HTMLParagraphElement & HTMLLabelElement & HTMLHeadingElement & HTMLSpanElement
    > {
  sansita?: boolean; // 영어 폰트 사용 여부
  color?: ColorAlias;
  element?: ElementType;
}

export function withTypographyBase(element: string, variant: TypographyVariant) {
  function Typography({ children, style, color, sansita, ...props }: TypographyProps) {
    return (
      <StyledTypography
        as={element}
        fontFamily={sansita ? 'SansitaOne' : undefined}
        variant={variant}
        style={{ color: color ? colors[color] : undefined, ...style }}
        {...props}
      >
        {children}
      </StyledTypography>
    );
  }
  return Typography;
}

const StyledTypography = styled.p<{ variant: TypographyVariant; fontFamily?: FontFamilyVariants }>`
  ${({ variant }) => styles[variant]}
  ${({ fontFamily }) => fontFamily && `font-family: ${fontFamily}`};
`;
