import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UploadPdfComponent } from './upload-pdf/upload-pdf.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DragNDropDirective } from './directives/drag-n-drop.directive';
import { CommonModule } from '@angular/common';
import { MarkdownModule } from "ngx-markdown";
import { provideHttpClient } from "@angular/common/http";
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    UploadPdfComponent,
    NavbarComponent,
    DragNDropDirective,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    MarkdownModule.forRoot(),
    MatProgressSpinnerModule,
    FormsModule
  ],
  providers: [
    provideHttpClient(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
