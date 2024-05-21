import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UploadPdfComponent } from './upload-pdf/upload-pdf.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DragNDropDirective } from './directives/drag-n-drop.directive';

@NgModule({
  declarations: [
    AppComponent,
    UploadPdfComponent,
    NavbarComponent,
    DragNDropDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
