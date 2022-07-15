import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { HeaderComponent } from './components/header/header.component';
import { MatButtonModule } from '@angular/material/button';
@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule
  ], exports:[
    MatTableModule,
    MatIconModule,
    HeaderComponent,
    MatButtonModule
  ]
})
export class SharedModule { }
