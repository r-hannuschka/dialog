import { ComponentType } from '@angular/cdk/portal';
import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ConfirmDialogConfiguration, ConfirmDialogResponse, DialogConfiguration, DialogType, MessageDialogConfiguration } from './api';
import { BaseDialogComponent } from './base/dialog';
import { ConfirmDialogComponent } from './confirm/dialog';
import { MessageDialogComponent } from './message/dialog';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(
    private readonly matDialog: MatDialog,
  ) {}

  public openDialog(type: DialogType.CONFIRM, config: ConfirmDialogConfiguration): MatDialogRef<ConfirmDialogComponent, ConfirmDialogResponse>;
  public openDialog(type: DialogType.MESSAGE, config: MessageDialogConfiguration): MatDialogRef<MessageDialogComponent, void>;
  public openDialog(type: DialogType, config: DialogConfiguration): MatDialogRef<unknown> {
    let component: ComponentType<unknown>;

    switch (type) {
      case DialogType.MESSAGE:
        component = MessageDialogComponent;
        break;

      case DialogType.CONFIRM:
        component = ConfirmDialogComponent;
        break;

      default:
        throw `not supported dialog type`;
    }

    return this.matDialog.open(BaseDialogComponent, {
      width: '100%',
      maxWidth: '30rem',
      data: {
        ...config,
        component
      }
    });
  }
}
