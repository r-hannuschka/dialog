import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MessageDialogConfiguration } from '../api';

@Component({
  selector: 'app-message-dialog',
  templateUrl: './dialog.html',
})
export class MessageDialogComponent {

  constructor(
    @Inject(MAT_DIALOG_DATA) public readonly dialogData: MessageDialogConfiguration,
    private readonly dialogRef: MatDialogRef<MessageDialogComponent, void>
  ) {}

  public closeDialog(): void {
    this.dialogRef.close();
  }
}
