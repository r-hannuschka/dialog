import { ComponentType } from "@angular/cdk/portal";

export enum DialogType {
  CONFIRM,
  MESSAGE,
  CUSTOM
};

export interface DialogConfiguration {
  title: string;
}

export interface BaseDialogConfiguration extends DialogConfiguration {
  component: ComponentType<unknown>;
}

export interface MessageDialogConfiguration extends DialogConfiguration {
  message: string;
}

export interface ConfirmDialogConfiguration extends MessageDialogConfiguration {
  confirmText: string;
  cancelText: string;
}

export interface ConfirmDialogResponse {
  confirm: boolean;
}
