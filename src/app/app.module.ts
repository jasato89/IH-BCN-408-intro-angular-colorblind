import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ColorblindComponent } from './colorblind/colorblind.component';
import { GroceryListComponent } from './grocery-list/grocery-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ColorblindComponent,
    GroceryListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
