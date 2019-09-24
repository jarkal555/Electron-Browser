import styled, { css } from 'styled-components';

import { icons } from '~/renderer/constants';
import { centerIcon } from '~/renderer/mixins';
import { ITheme } from '~/interfaces';

export const Remove = styled.div`
  height: 16px;
  width: 16px;
  cursor: pointer;
  opacity: 0.54;
  background-image: url(${icons.close});
  ${centerIcon()};
  ${({ theme }: { theme?: ITheme }) => css`
    filter: ${theme['pages.lightForeground'] ? 'invert(100%)' : 'none'};
  `};
  &:hover {
    opacity: 1;
  }
`;

export const Favicon = styled.div`
  ${centerIcon()};
  height: 16px;
  width: 16px;
  margin-right: 24px;
`;

export const Title = styled.a`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: fit-content;
  text-decoration: none;
  color: inherit;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

export const TitleContainer = styled.div`
  flex: 2;
  margin-right: 16px;
`;

export const Site = styled.div`
  flex: 1;
  opacity: 0.54;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Time = styled.div`
  opacity: 0.54;
  margin-left: 16px;
  margin-right: 24px;
`;