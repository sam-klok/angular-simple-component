import { Component, Input } from '@angular/core';
//import { FormsModule } from '@angular/forms';
//import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-calc-sum',
  templateUrl: './calc-sum.component.html',
  styleUrls: ['./calc-sum.component.css']
})
export class CalcSumComponent {
  value1: string = "";
  value2: string = "";
  sum: string = "";

  calculateSum()
  {
    this.sum = this.value1+ this.value2;
  }
}
