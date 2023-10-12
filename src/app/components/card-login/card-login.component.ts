import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-card-login',
  templateUrl: './card-login.component.html',
  styleUrls: ['./card-login.component.scss'],
})
export class CardLoginComponent implements OnInit {
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
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.form = this.fb.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.form.invalid) {
      return;
    }

    const payload = {
      email: this.formControls['email'].value,
      password: this.formControls['password'].value,
    };
  }
}
