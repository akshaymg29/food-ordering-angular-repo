import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantDetailsFormComponent } from './restaurant-details-form.component';

describe('RestaurantDetailsFormComponent', () => {
  let component: RestaurantDetailsFormComponent;
  let fixture: ComponentFixture<RestaurantDetailsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestaurantDetailsFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestaurantDetailsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
