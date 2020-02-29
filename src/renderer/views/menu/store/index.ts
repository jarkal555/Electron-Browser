import { ipcRenderer, remote } from 'electron';
import { observable } from 'mobx';
import { DialogStore } from '~/models/dialog-store';

export class Store extends DialogStore {
  @observable
  public alwaysOnTop = false;

  @observable
  public updateAvailable = false;

  public constructor() {
    super();
    ipcRenderer.on('visible', async (e, flag) => {
      this.visible = flag;
      this.alwaysOnTop = remote.getCurrentWindow().isAlwaysOnTop();
      this.updateAvailable = await ipcRenderer.invoke('is-update-available');
    });

    ipcRenderer.on('update-available', () => {
      this.updateAvailable = true;
    });
  }

  public async save() {
    ipcRenderer.send('save-settings', {
      settings: JSON.stringify(this.settings),
    });
  }
}

export default new Store();
