import { Component } from '@angular/core';
import { FormBuilder } from "@angular/forms";
import { AuthService } from "../../../shared/shared/auth/auth.service";
import { ActivatedRoute, Router } from "@angular/router";
import { FormHelper } from "../../../shared/app-forms/form-helper";
import { finalize } from "rxjs";

@Component({
  selector: 'app-auth-form',
  styles: [],
  template: ``
})
export abstract class AuthFormComponent {
  public form = this.fb.group({});
  public isFormLoading = false;
  public returnUrl = this.route.snapshot.params['returnUrl'] || '/app'
  protected onSubmitAuthMethodName!: 'login' | 'register';

  constructor(
    protected fb: FormBuilder,
    protected auth: AuthService,
    protected router: Router,
    protected route: ActivatedRoute) {
  }

  protected onSuccessSubmitMethod: () => void = () => {
    this.router.navigate([this.returnUrl]);
  }

  public onSubmit = FormHelper.wrapSubmit(this.form, () => {

    this.isFormLoading = true;

    this.auth[this.onSubmitAuthMethodName](this.form.value)
      .pipe(
        finalize(() => {
          this.isFormLoading = false;
        })
      )
      .subscribe({
        next: () => {
          this.onSuccessSubmitMethod();
        },
        error: FormHelper.handleApiError(this.form)
      });


  });

}
