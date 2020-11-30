import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServersEditComponent } from './servers-edit.component';

describe('ServersEditComponent', () => {
  let component: ServersEditComponent;
  let fixture: ComponentFixture<ServersEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServersEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServersEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
