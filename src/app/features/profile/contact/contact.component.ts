import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

    constructor(private fb: FormBuilder) {}

    form = this.fb.group({
        issue: ['', [Validators.required]],
    })

    onSubmit() {

    }

}
