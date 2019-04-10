import styled, { css } from 'styled-components';
import { centerImage, shadows } from '~/shared/mixins';
import { icons } from '../../constants';
import { colors } from '~/renderer/constants';

export const StyledOverlay = styled.div`
  background-color: rgba(0, 0, 0, 0.9);
  color: white;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  z-index: 9999;
  transition: 0.2s opacity;

  ${({ visible }: { visible: boolean }) => css`
    opacity: ${visible ? 1 : 0};
    pointer-events: ${visible ? 'auto' : 'none'};
  `};
`;

export const HeaderText = styled.div`
  position: relative;
  display: flex;
  font-size: 16px;
  padding-left: 8px;
  padding-top: 6px;
  padding-right: 24px;
  padding-bottom: 6px;
  margin-bottom: 16px;
  margin-top: -8px;
  border-radius: 50px;
  transition: 0.1s background-color;
  cursor: pointer;

  ${({ clickable }: { clickable: boolean }) => css`
    pointer-events: ${clickable ? 'auto' : 'none'};
  `}

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

export const HeaderArrow = styled.div`
  ${centerImage('18px', '18px')};
  margin-left: 8px;
  height: 16px;
  width: 16px;
  background-image: url(${icons.forward});
  filter: invert(100%);
`;

export const DropArrow = styled.div`
  ${centerImage('24px', '24px')};
  margin-left: 8px;
  height: 32px;
  width: 32px;
  background-image: url(${icons.down});
  filter: invert(100%);
  border-radius: 50%;
  transition: 0.1s background-color;
`;

export const Separator = styled.div`
  background-color: rgba(0, 0, 0, 0.12);
  height: 1px;
  width: 100%;
`;

export const Section = styled.div`
  padding: 24px;
  background-color: rgba(255, 255, 255, 0.12);
  margin-bottom: 24px;
  border-radius: 30px;
  color: white;
  overflow: hidden;
`;

export const Menu = styled.div`
  display: flex;
  margin-left: -16px;
  margin-top: -16px;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Scrollable = styled.div`
  position: absolute;
  overflow-y: scroll;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Title = styled.div`
  font-size: 24px;
  margin-left: 24px;
  font-weight: 300;
  margin-bottom: 16px;
  margin-top: 24px;
  color: white;
  position: relative;
  display: flex;
  padding-right: 42px;

  &:hover {
    ${DropArrow} {
      background-color: rgba(0, 0, 0, 0.15);
    }
  }
`;

export const Content = styled.div`
  width: calc(100% - 64px);
  max-width: 800px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  transition: 0.3s all;

  ${({ visible, right }: { visible: boolean; right?: boolean }) => css`
    margin-left: ${visible ? 0 : right ? 72 : -72}px;
    opacity: ${visible ? 1 : 0};
    pointer-events: ${visible ? 'auto' : 'none'};
  `};
`;

export const Toolbar = styled.div`
  width: calc(100% - 64px - 32px);
  max-width: calc(800px - 32px);
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  font-size: 20px;
  font-weight: 300;
  background-color: black;
  top: 16px;
  width: 100%;
  height: 56px;
  border-radius: 30px;
  overflow: hidden;
  box-shadow: ${shadows(12)};
  z-index: 999;
  transition: 0.3s opacity;

  ${({ visible, fixed }: { visible: boolean; fixed: boolean }) => css`
    opacity: ${visible ? 1 : 0};
    pointer-events: ${visible ? 'auto' : 'none'};
    position: ${fixed ? 'fixed' : 'absolute'};
    top: ${fixed ? 16 : 56 + 16}px;
  `};
`;

export const Back = styled.div`
  ${centerImage('24px', '24px')};
  background-image: url(${icons.back});
  height: 56px;
  width: 56px;
  opacity: 0.54;
  filter: invert(100%);

  &:hover {
    opacity: 1;
  }
`;
