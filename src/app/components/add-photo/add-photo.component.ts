import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { HttpService } from 'src/app/shared/services/http.service';
import { PhotosActions } from 'src/app/shared/store/photo.actions';
import { PhotoInterface } from 'src/app/shared/types/photo.interface';

@Component({
  selector: 'app-add-photo',
  templateUrl: './add-photo.component.html',
  styleUrls: ['./add-photo.component.scss'],
})
export class AddPhotoComponent implements OnInit {
  modalRef: BsModalRef;
  formData: FormData;
  isLoading: boolean = false;

  form: FormGroup;
  get formControls() {
    return this.form.controls;
  }
  get hasErrorName() {
    return this.formControls['name'].invalid && this.formControls['name'].dirty;
  }

  constructor(
    public modalService: BsModalService,
    private fb: FormBuilder,
    private http: HttpService,
    private store: Store
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.form = this.fb.group({});
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {
      class: 'modal-dialog-centered',
    });
  }

  onHandleFile(file: File) {
    this.formData = new FormData();
    this.formData.append('file', file);
  }

  onSubmit() {
    if (this.form.invalid) {
      return;
    }
    this.isLoading = true;

    this.http
      .uploadFile(this.formData)
      .subscribe((data: PhotoInterface) => {
        this.store.dispatch(PhotosActions.addPhoto({ payload: data }));
      })
      .add(() => {
        this.modalRef.hide();
        this.isLoading = false;
      });
  }
}
