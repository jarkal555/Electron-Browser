import { AppWindow } from '../windows';
import { Dialog } from '.';
import { ipcMain } from 'electron';
import { DIALOG_MARGIN } from '~/constants/design';

const WIDTH = 350;

export class DownloadsDialog extends Dialog {
  public visible = false;

  private height = 0;

  public left = 0;

  constructor(appWindow: AppWindow) {
    super(appWindow, {
      name: 'downloads-dialog',
      bounds: {
        width: WIDTH,
        height: 0,
        y: 34,
      },
    });

    ipcMain.on(`height-${this.webContents.id}`, (e, height) => {
      this.height = height;
      this.rearrange();
    });
  }

  public rearrange() {
    const { height } = this.appWindow.getContentBounds();

    const maxHeight = height - 34 - 16;

    super.rearrange({
      x: Math.round(this.left - WIDTH + DIALOG_MARGIN),
      height: Math.round(Math.min(height, this.height + 28)),
    });

    this.webContents.send(`max-height`, Math.min(maxHeight, this.height));
  }

  public show() {
    super.show();
    this.webContents.send('visible', true);
  }
}
