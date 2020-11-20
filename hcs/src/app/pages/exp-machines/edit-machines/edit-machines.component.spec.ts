import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMachinesComponent } from './edit-machines.component';

describe('EditMachinesComponent', () => {
  let component: EditMachinesComponent;
  let fixture: ComponentFixture<EditMachinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditMachinesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditMachinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
