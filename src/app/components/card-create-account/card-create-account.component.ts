import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
    return (
      this.formControls['name'].invalid &&
      this.formControls['name'].dirty
    );
  }
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
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

    const payload = {
      email: this.formControls['email'].value,
      password: this.formControls['password'].value,
      name: this.formControls['name'].value,
    };
  }
}
