import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddExpTableComponent } from './add-exp-table.component';

describe('AddExpTableComponent', () => {
  let component: AddExpTableComponent;
  let fixture: ComponentFixture<AddExpTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddExpTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddExpTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
