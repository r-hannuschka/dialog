import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ConfirmDialogConfiguration, ConfirmDialogResponse } from '../api';

@Component({
  selector: 'app-message-dialog',
  templateUrl: './dialog.html',
})
export class ConfirmDialogComponent {

  constructor(
    @Inject(MAT_DIALOG_DATA) public readonly dialogData: ConfirmDialogConfiguration,
    private readonly dialogRef: MatDialogRef<ConfirmDialogComponent, ConfirmDialogResponse>
  ) {}

  public confirm(): void {
    this.dialogRef.close({ confirm: true });
  }

  public cancel(): void {
    this.dialogRef.close({ confirm: false });
  }
}
