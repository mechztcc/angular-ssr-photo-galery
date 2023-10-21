import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/shared/services/http/http.service';
import { NotifierService } from 'src/app/shared/services/notifier/notifier.service';

@Component({
  selector: 'app-card-create-account',
  templateUrl: './card-create-account.component.html',
  styleUrls: ['./card-create-account.component.scss'],
})
export class CardCreateAccountComponent implements OnInit {
  form: FormGroup;
  get formControls() {
    return this.form.controls;
  }

  get hasErrorEmail() {
    return (
      this.formControls['email'].invalid && this.formControls['email'].dirty
    );
  }

  get hasErrorPassword() {
    return (
      this.formControls['password'].invalid &&
      this.formControls['password'].dirty
    );
  }

  get hasErrorName() {
    return this.formControls['name'].invalid && this.formControls['name'].dirty;
  }

  isLoading: boolean = false;
  constructor(
    private fb: FormBuilder,
    private http: HttpService,
    private router: Router,
    private notifier: NotifierService
  ) {}

  ngOnInit(): void {
    this.initForm();
    localStorage.clear();
  }

  initForm() {
    this.form = this.fb.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.required],
      name: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.form.invalid) {
      return;
    }

    this.isLoading = true;
    const payload = {
      email: this.formControls['email'].value,
      password: this.formControls['password'].value,
      name: this.formControls['name'].value,
    };

    this.http
      .createAccount(payload)
      .subscribe((data) => {
        this.notifier.success('Create account with sucess! Redirecting...');
        setTimeout(() => {
          this.router.navigate(['/login']);
        }, 2000);
      })
      .add(() => {
        this.isLoading = false;
      });
  }
}
