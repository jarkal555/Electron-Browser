import { observer } from 'mobx-react-lite';
import * as React from 'react';

import { AddTab, StyledTabbar, TabsContainer } from './style';
import { Tabs } from '../Tabs';
import store from '../../../store';
import { icons } from '~/renderer/constants';
import { ipcRenderer } from 'electron';

let timeout: any;

const onMouseEnter = () => {
  clearTimeout(timeout);
};

const onTabsMouseLeave = () => {
  timeout = setTimeout(() => {
    store.tabs.removedTabs = 0;
    store.tabs.updateTabsBounds(true);
  }, 300);
  ipcRenderer.send(`hide-tab-preview-${store.windowId}`);
  store.tabs.canShowPreview = true;
};

const onAddTabClick = () => {
  store.tabs.onNewTab();
};

const onWheel = (e: any) => {
  if (!store.tabs.containerRef) return;

  const { deltaX, deltaY } = e;
  const { scrollLeft } = store.tabs.containerRef.current;

  const delta = Math.abs(deltaX) >= Math.abs(deltaY) ? deltaX : -deltaY;
  const target = delta / 2;

  store.tabs.scrollingToEnd = false;

  store.tabs.containerRef.current.scrollLeft = scrollLeft + target;
};

export const Tabbar = observer(() => {
  return (
    <StyledTabbar>
      <TabsContainer
        onMouseEnter={onMouseEnter}
        onMouseLeave={onTabsMouseLeave}
        onWheel={onWheel}
        ref={store.tabs.containerRef}
      >
        <Tabs />
      </TabsContainer>
      <AddTab
        icon={icons.add}
        onClick={onAddTabClick}
        divRef={(r: any) => (store.addTab.ref = r)}
      />
    </StyledTabbar>
  );
});
