import { XMatDatePickerModule, XMatPasswordModule } from 'x-material';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatPseudoCheckboxModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSliderModule } from '@angular/material/slider';
import { FormlyModule } from '@ngx-formly/core';
import { FormlySelectModule } from '@ngx-formly/core/select';

import { FormlyFieldAutoComplete } from './autocomplete/autocomplete.type';
import { FormlyFieldCheckbox } from './checkbox/checkbox.type';
import { FormlyFieldDatePicker } from './date-picker/date-picker.type';
import { FormlyWrapperFormField } from './form-field/form-field.wrapper';
import { FormlyFieldInput } from './input/input.type';
import { FormlyFieldMultiCheckbox } from './multi-checkbox/multi-checkbox.type';
import { FormlyFieldNativeSelect } from './native-select/native-select.type';
import { FormlyFieldPassword } from './password/password.type';
import { FormlyFieldRadio } from './radio/radio.type';
import { FormlyFieldRepeat } from './repeat/repeat.type';
import { FormlyFieldSelect } from './select/select.type';
import { FormlyFieldSlider } from './slider/slider.type';
import { FormlyFieldTextArea } from './textarea/textarea.type';
import { FormlyFieldToggle } from './toggle/toggle.type';
import { FormlyFieldVerificationCode } from './verification-code/verification-code.type';
import { FormlyWrapperAddons } from './wrapper/addons.wrapper';
import { FormlyWrapperStatementGroup } from './wrapper/statement-group.wrapper';
import { xFormlyConfig } from './x-formly.config';

@NgModule({
  imports: [
    CommonModule,
    FormlyModule.forRoot(xFormlyConfig),
    FormlySelectModule,
    MatAutocompleteModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatPseudoCheckboxModule,
    MatRadioModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatSliderModule,
    ReactiveFormsModule,
    XMatPasswordModule,
    XMatDatePickerModule,
  ],
  declarations: [
    FormlyFieldAutoComplete,
    FormlyFieldCheckbox,
    FormlyFieldDatePicker,
    FormlyFieldInput,
    FormlyFieldMultiCheckbox,
    FormlyFieldNativeSelect,
    FormlyFieldPassword,
    FormlyFieldRadio,
    FormlyFieldSelect,
    FormlyFieldSlider,
    FormlyFieldTextArea,
    FormlyFieldToggle,
    FormlyFieldVerificationCode,
    FormlyWrapperAddons,
    FormlyWrapperFormField,
    FormlyWrapperStatementGroup,
    FormlyFieldRepeat,
  ],
})
export class XFormlyModule {}
