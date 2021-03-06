import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { TokenInterceptor } from "./interceptors/token.interceptor";
import { LogoutComponent } from "./components/logout/logout.component";


@NgModule({
  declarations: [
    LogoutComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true}
  ],
  exports: [
    LogoutComponent
  ]
})
export class AuthModule {
}
