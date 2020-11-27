import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersDeleteManyComponent } from './users-delete-many.component';

describe('UsersDeleteManyComponent', () => {
  let component: UsersDeleteManyComponent;
  let fixture: ComponentFixture<UsersDeleteManyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersDeleteManyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersDeleteManyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
