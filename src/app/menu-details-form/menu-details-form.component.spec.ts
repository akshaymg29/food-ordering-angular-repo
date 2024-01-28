import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuDetailsFormComponent } from './menu-details-form.component';

describe('MenuDetailsFormComponent', () => {
  let component: MenuDetailsFormComponent;
  let fixture: ComponentFixture<MenuDetailsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuDetailsFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuDetailsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
