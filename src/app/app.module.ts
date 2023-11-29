import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { KittenViewComponent } from './components/kitten-view/kitten-view.component';

@NgModule({
  declarations: [
    AppComponent,
    KittenViewComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
