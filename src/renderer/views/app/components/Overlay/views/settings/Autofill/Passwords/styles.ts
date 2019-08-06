import styled, { css } from 'styled-components';

import { transparency, icons } from '~/renderer/constants';
import { centerIcon } from '~/renderer/mixins';

export const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-row-gap: 16px;
`;

export const Label = styled.div`
  font-size: 13px;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const HeaderLabel = styled(Label)`
  color: rgba(0, 0, 0, ${transparency.text.medium});
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Icon = styled.div`
  width: 16px;
  height: 16px;
  ${centerIcon('contain')};

  ${({ icon }: { icon: string }) => css`
    background-image: url(${icon});
  `};
`;

export const PasswordIcon = styled.div`
  width: 20px;
  height: 20px;
  margin-left: auto;
  margin-right: 12px;
  opacity: ${transparency.icons.inactive};
  cursor: pointer;
  transition: 0.15s background-image;
  ${centerIcon('contain')};

  ${({ toggled }: { toggled: boolean }) => css`
    background-image: url(${toggled ? icons.invisible : icons.visible});
  `};
`;

export const More = styled.div`
  width: 24px;
  height: 24px;
  opacity: ${transparency.icons.inactive};
  background-image: url(${icons.more});
  cursor: pointer;
  ${centerIcon(20)};
`;
