import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcSumComponent } from './calc-sum.component';

describe('CalcSumComponent', () => {
  let component: CalcSumComponent;
  let fixture: ComponentFixture<CalcSumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalcSumComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalcSumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
