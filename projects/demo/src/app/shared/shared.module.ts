import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FormlyModule } from '@ngx-formly/core';

import { CopierService } from './copier/copier.service';
import { ExampleViewerComponent } from './example-viewer/example-viewer.component';
import { ExamplesRouterViewerComponent } from './examples-router-viewer/examples-router-viewer.component';
import { StackblitzButtonModule } from './stackblitz';

@NgModule({
  imports: [
    CommonModule,
    MatTooltipModule,
    MatTabsModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    StackblitzButtonModule,
    FormlyModule,
  ],
  exports: [
    CommonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatTabsModule,
    MatMenuModule,
    FormlyModule,
    MatNativeDateModule,
    ExamplesRouterViewerComponent,
  ],
  declarations: [ExampleViewerComponent, ExamplesRouterViewerComponent],
  providers: [CopierService],
})
export class SharedModule {}
