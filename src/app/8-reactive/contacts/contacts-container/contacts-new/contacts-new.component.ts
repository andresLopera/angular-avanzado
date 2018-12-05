import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contacts-new',
  templateUrl: './contacts-new.component.html',
  styles: []
})
export class ContactsNewComponent implements OnInit {
  @Output() public save = new EventEmitter<any>();
  public item = { name: '', email: '' };
  public form: FormGroup;
  constructor(protected fb: FormBuilder) {}

  public ngOnInit(): void {
    this.form = this.fb.group({
      name: this.item.name,
      email: this.item.email
    });
  }
}
