import { NgModule } from '@angular/core';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { SharedModule } from "../../shared/shared/shared.module";
import { SharedUIModule } from "../../shared/shared-ui/shared-ui.module";
import { DashboardNavComponent } from './components/nav/dashboard-nav/dashboard-nav.component';
import { UILibModule } from "@ui-lib";
import { DashboardNavSearchComponent } from "./components/nav/dashboard-nav-search/dashboard-nav-search.component";
import { DashboardNavUserDropdownComponent } from './components/nav/dashboard-nav-user-dropdown/dashboard-nav-user-dropdown.component';
import { AbstractComponentsModule } from "../../shared/shared/abstract-components/abstract-components.module";
import { AppFormsModule } from "../../shared/app-forms/app-forms.module";


@NgModule({
  declarations: [
    DashboardComponent,
    DashboardNavComponent,
    DashboardNavSearchComponent,
    DashboardNavUserDropdownComponent
  ],
  imports: [
    SharedModule,
    SharedUIModule,
    AppFormsModule,
    DashboardRoutingModule,
    UILibModule,
    AbstractComponentsModule
  ]
})
export class DashboardModule {
}
