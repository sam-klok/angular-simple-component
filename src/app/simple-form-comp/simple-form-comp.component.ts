import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-simple-form-comp',
  templateUrl: './simple-form-comp.component.html',
  styleUrls: ['./simple-form-comp.component.css']
})
export class SimpleFormCompComponent {
  onSubmit(f: NgForm) {
    console.log(f.value);  // { first: '', last: '' }
    console.log(f.valid);  // false
  }
}
