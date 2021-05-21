import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MiComponenteComponent } from './mi-componente/mi-componente.component';
import { AlertNameComponent } from './alert-name/alert-name.component';
import { ImageSelectorComponent } from './image-selector/image-selector.component';

@NgModule({
  declarations: [
    AppComponent,
    MiComponenteComponent,
    AlertNameComponent,
    ImageSelectorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
