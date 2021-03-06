import { NgModule } from '@angular/core';
import { CommunityListComponent } from './components/community-list/community-list.component';
import { CommunityComponent } from './components/community/community.component';
import { SharedModule } from "../../../shared/shared/shared.module";
import { UIButtonModule, UIIconModule } from "@ui-lib";
import { CommunityRoutingModule } from "./community-routing.module";
import { DiscussionModule } from "../discussion/discussion.module";
import { AppFormsModule } from "../../../shared/app-forms/app-forms.module";
import { CommunityFormComponent } from './components/community-form/community-form.component';


@NgModule({
  declarations: [
    CommunityListComponent,
    CommunityComponent,
    CommunityFormComponent
  ],
  exports: [CommunityListComponent],
  imports: [
    SharedModule,
    UIIconModule,
    UIButtonModule,
    CommunityRoutingModule,
    AppFormsModule,
    DiscussionModule,
  ]
})
export class CommunityModule {
}
