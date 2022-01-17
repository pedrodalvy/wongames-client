import { RibbonColors, RibbonProps } from 'components/Ribbon';
import styled, { DefaultTheme, css } from 'styled-components';

import { darken } from 'polished';

const wrapperModifiers = {
  color: (theme: DefaultTheme, color: RibbonColors) => css`
    background-color: ${theme.colors[color]};

    &::before {
      border-left-color: ${darken(0.2, theme.colors[color])};
      border-top-color: ${darken(0.2, theme.colors[color])};
    }
  `,

  normal: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.small};
    padding: 0 ${theme.spacings.small};
    height: 3.6rem;
    right: -2rem;

    &::before {
      top: 3.6rem;
      border-top-width: 1rem;
      border-right-width: 2rem;
    }
  `,

  small: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xsmall};
    padding: 0 ${theme.spacings.xsmall};
    height: 2.6rem;
    right: -1.5rem;

    &::before {
      top: 2.6rem;
      border-top-width: 0.7rem;
      border-right-width: 1.5rem;
    }
  `,
};

export const Wrapper = styled.div<Omit<RibbonProps, 'children'>>`
  position: absolute;
  top: ${({ theme }) => theme.spacings.xsmall};
  display: flex;
  align-items: center;
  font-weight: ${({ theme }) => theme.font.bold};
  color: ${({ theme }) => theme.colors.white};

  &::before {
    content: '';
    position: absolute;
    right: 0;
    border-style: solid;
    border-left-width: 0;
    border-right-color: transparent;
    border-bottom-color: transparent;
    border-bottom-width: 1rem;
  }

  ${({ theme, color, size }) => css`
    ${!!size && wrapperModifiers[size](theme)}
    ${!!color && wrapperModifiers.color(theme, color)}
  `}
`;
