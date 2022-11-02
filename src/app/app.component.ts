import { Component } from '@angular/core';
import { DialogType } from './libs/dialog/src/api';
import { DialogService } from './libs/dialog/src/dialog.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dialog';

  constructor(
    private readonly dialogService: DialogService
  ) {}

  showBaseDialog(): void {
    const dialogRef = this.dialogService.openDialog(DialogType.CONFIRM, {
      title : 'My Dialog',
      message: 'hallo welt wie geht es euch so',
      confirmText: 'ja',
      cancelText: 'nein'
    });

    dialogRef.afterClosed().subscribe((response) => {
      console.log(response?.confirm)
    });
  }
}
