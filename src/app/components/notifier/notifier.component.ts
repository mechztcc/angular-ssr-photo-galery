import { Component } from '@angular/core';
import { NotifierService } from 'src/app/shared/services/notifier.service';

@Component({
  selector: 'app-notifier',
  templateUrl: './notifier.component.html',
  styleUrls: ['./notifier.component.scss'],
})
export class NotifierComponent {
  constructor(public notifier: NotifierService) {}
}
