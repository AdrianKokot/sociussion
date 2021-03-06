import { Component } from '@angular/core';
import { AbstractBodyClickListenerComponent } from "../../../../../shared/shared/abstract-components/components/abstract-body-click-listener/abstract-body-click-listener.component";
import { dropdownAnimation } from "../../../../../shared/shared/animations/dropdown.animation";

@Component({
  selector: 'app-dashboard-nav-user-dropdown',
  templateUrl: './dashboard-nav-user-dropdown.component.html',
  styles: [],
  host: {
    class: 'block select-none'
  },
  animations: [dropdownAnimation]
})
export class DashboardNavUserDropdownComponent extends AbstractBodyClickListenerComponent {

  public isDropdownVisible: boolean = false;

  protected override onOutsideComponentBodyClick() {
    this.hide();
  }

  public show() {
    this.isDropdownVisible = true;

    this.startBodyClickListening();
  }

  public hide() {
    this.isDropdownVisible = false;

    this.stopBodyClickListening();
  }

  toggle() {
    if (this.isDropdownVisible) {
      this.hide();
    } else {
      this.show();
    }
  }
}
