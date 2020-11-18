import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServersCreateComponent } from './servers-create.component';

describe('ServersCreateComponent', () => {
  let component: ServersCreateComponent;
  let fixture: ComponentFixture<ServersCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServersCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServersCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
