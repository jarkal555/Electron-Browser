import * as React from 'react';
import { observer } from 'mobx-react-lite';

import store from '~/renderer/views/app/store';
import { ContextMenu, ContextMenuItem } from '~/renderer/components/ContextMenu';
import { icons } from '~/renderer/constants';
import { Passwords } from './Passwords';
import { Addresses } from './Addresses';
import { Content } from '../../../style';
import { Header } from '../style';

const onRemoveClick = () => {
  const item = store.autoFill.selectedItem;

  store.autoFill.removeItem(item);
}

export const Autofill = observer(() => {
  return (
    <Content>
      <Header style={{ paddingBottom: 12 }}>Autofill</Header>
      <Passwords />
      <Addresses />
      <ContextMenu
          style={{
            top: store.autoFill.menuTop,
            left: store.autoFill.menuLeft - 130,
          }}
          visible={store.autoFill.menuVisible}
        >
          <ContextMenuItem
            icon={icons.trash}
            onClick={onRemoveClick}
          >
            Remove
          </ContextMenuItem>
        </ContextMenu>
    </Content>
  );
});
