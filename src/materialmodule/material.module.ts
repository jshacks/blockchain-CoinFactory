import { NgModule } from '@angular/core';
import 'reflect-metadata'
import 'zone.js/dist/zone';
import 'zone.js/dist/long-stack-trace-zone';

import {
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatInputModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatChipsModule,
  MatSelectModule
} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatChipsModule,
    MatSelectModule
  ],
  exports: [
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatChipsModule,
    MatSelectModule
  ]
})
export class MaterialModule {}
