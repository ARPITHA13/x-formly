import { ChangeDetectorRef, Component } from '@angular/core';
import { FormlyTemplateOptions } from '@ngx-formly/core';

import { FieldType } from '../form-field/field.type';

@Component({
  selector: 'formly-field-mat-password',
  template: `
    <input
      matInput
      [id]="id"
      [readonly]="to.readonly"
      [errorStateMatcher]="errorStateMatcher"
      [formControl]="formControl"
      [formlyAttributes]="field"
      [tabindex]="to.tabindex || 0"
      [placeholder]="to.placeholder"
      [type]="isHide ? 'password' : 'text'"
    />
  `,
})
export class FormlyFieldPassword extends FieldType {
  /**
   * hide password or not
   */
  isHide = true;

  /**
   * handle click event;
   * We need to trigger change detection manually since mutable object here.
   */
  onClick: (to: FormlyTemplateOptions) => void;

  defaultOptions = {
    templateOptions: {
      addonRight: {
        icon: this.icon,
        onClick: this.onClick,
      },
    },
  };

  constructor(private cdf: ChangeDetectorRef) {
    super();

    this.onClick = (to: FormlyTemplateOptions): void => {
      this.isHide = !this.isHide;
      to.addonRight.icon = this.icon;
      this.cdf.detectChanges();
    };
  }

  /**
   * @ignore
   */
  get icon() {
    return this.isHide ? 'visibility_off' : 'visibility';
  }
}