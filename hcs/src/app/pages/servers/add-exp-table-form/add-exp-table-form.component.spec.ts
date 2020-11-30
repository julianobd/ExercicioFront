import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddExpTableFormComponent } from './add-exp-table-form.component';

describe('AddExpTableFormComponent', () => {
  let component: AddExpTableFormComponent;
  let fixture: ComponentFixture<AddExpTableFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddExpTableFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddExpTableFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
