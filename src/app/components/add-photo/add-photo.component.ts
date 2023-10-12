import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-add-photo',
  templateUrl: './add-photo.component.html',
  styleUrls: ['./add-photo.component.scss'],
})
export class AddPhotoComponent implements OnInit {
  modalRef: BsModalRef;

  form: FormGroup;
  get formControls() {
    return this.form.controls;
  }
  get hasErrorName() {
    return this.formControls['name'].invalid && this.formControls['name'].dirty;
  }

  constructor(public modalService: BsModalService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.form = this.fb.group({
      name: ['', Validators.required],
    });
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {
      class: 'modal-dialog-centered',
    });
  }

  onSubmit() {
    if (this.form.invalid) {
      return;
    }
  }
}
