import { CdkPortalOutlet, ComponentPortal } from '@angular/cdk/portal';
import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BaseDialogConfiguration } from '../api';

@Component({
  selector: 'app-base-dialog',
  templateUrl: './dialog.html',
  styleUrls: ['./dialog.scss']
})
export class BaseDialogComponent implements OnInit {

  @ViewChild('portalHost', { read: CdkPortalOutlet, static: true })
  private portalHost!: CdkPortalOutlet;

  constructor(
    @Inject(MAT_DIALOG_DATA) public readonly dialogData: BaseDialogConfiguration,
  ) {}

  public ngOnInit() {
    const componentPortal = new ComponentPortal(this.dialogData.component);
    this.portalHost.attach(componentPortal);
  }
}
