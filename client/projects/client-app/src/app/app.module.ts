import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedUIModule } from './shared/shared-ui/shared-ui.module';
import { SharedModule } from './shared/shared/shared.module';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    AppRoutingModule,
    SharedUIModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
