import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditExpTableComponent } from './edit-exp-table.component';

describe('EditExpTableComponent', () => {
  let component: EditExpTableComponent;
  let fixture: ComponentFixture<EditExpTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditExpTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditExpTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
