import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges
} from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-contacts-new',
  templateUrl: './contacts-new.component.html',
  styles: []
})
export class ContactsNewComponent implements OnInit, OnChanges {
  @Input() public item;
  @Output() public save = new EventEmitter<any>();
  public form: FormGroup;

  constructor(protected fb: FormBuilder) {}

  public ngOnInit(): void {
    this.buildForm();
  }

  public ngOnChanges(changes: SimpleChanges) {
    if (changes['item']) {
      this.patchValue();
    }
  }

  public onSaveClick() {
    const newContact = { ...this.form.value };
    newContact.birthDate = this.parseBirthDate(newContact.birthDate);
    this.save.next(newContact);
    this.form.reset();
  }

  public showError(controlName: string) {
    const control = this.form.get(controlName);
    return control.invalid && control.touched;
  }

  private buildForm() {
    const self = this;
    console.log(self.item);
    this.form = this.fb.group(
      {
        _id: this.item._id,
        name: [this.item.name, Validators.required],
        birthDate: [
          this.formatBirthDate(this.item.birthDate),
          [this.validateBirthDate]
        ],
        email: this.item.email,
        phone: [
          self.item.phone,
          [Validators.minLength(6), Validators.maxLength(12)]
        ]
      },
      []
    );
  }

  private patchValue() {
    if (this.form && this.item) {
      const item = {
        ...this.item,
        birthDate: this.formatBirthDate(this.item.birthDate)
      };
      this.form.patchValue(item);
    }
  }

  private validateBirthDate(control: AbstractControl) {
    const birthDate = Date.parse(control.value);
    if (birthDate && !isNaN(birthDate)) {
      const today = new Date().getTime();
      const age = (today - birthDate) / (1000 * 60 * 60 * 24 * 365);
      if (age >= 18 && age <= 100) {
        return null;
      }
    }
    return {
      birthDate: 'Date of birth invalid'
    };
  }
  private formatBirthDate(birthDate: string | number | Date) {
    const date = new Date(birthDate);
    if (date instanceof Date && !isNaN(date.getDate())) {
      return this.getDateFormated(date);
    } else {
      return '';
    }
  }
  private parseBirthDate(birthDate: string) {
    if (birthDate) {
      return Date.parse(birthDate);
    } else {
      return null;
    }
  }
  private getDateFormated = (date: Date) =>
    `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
}
