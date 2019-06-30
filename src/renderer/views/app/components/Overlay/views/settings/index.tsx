import * as React from 'react';
import { observer } from 'mobx-react';

import { Sections } from './styles';
import { Textfield } from '~/renderer/components/Textfield';
import { SettingsSection } from '~/renderer/views/app/store/settings';
import { NavigationDrawer } from '../../components/NavigationDrawer';
import store from '~/renderer/views/app/store';
import { Container, Scrollable, Content } from '../../style';

const preventHiding = (e: any) => {
  e.stopPropagation();
};

const MenuItem = observer(
  ({ section, children }: { section: SettingsSection; children: any }) => (
    <NavigationDrawer.Item
      onClick={() => (store.settings.selectedSection = section)}
      selected={store.settings.selectedSection === section}
    >
      {children}
    </NavigationDrawer.Item>
  ),
);

export const Settings = observer(() => {
  return (
    <Container
      right
      onClick={preventHiding}
      visible={
        store.overlay.currentContent === 'settings' && store.overlay.visible
      }
    >
      <Scrollable>
        <NavigationDrawer title="Settings" search>
          <MenuItem section="appearance">Appearance</MenuItem>
          <MenuItem section="autofill">Autofill</MenuItem>
          <MenuItem section="addressbar">Addressbar</MenuItem>
          <MenuItem section="privacy">Privacy and services</MenuItem>
          <MenuItem section="permissions">Permissions</MenuItem>
          <MenuItem section="startup">On startup</MenuItem>
          <MenuItem section="language">Language</MenuItem>
          <MenuItem section="shortcuts">Keyboard shortcuts</MenuItem>
          <MenuItem section="downloads">Downloads</MenuItem>
        </NavigationDrawer>
        <Sections>
          <Content>
            <Textfield label="Home page" />
          </Content>
        </Sections>
      </Scrollable>
    </Container>
  );
});
