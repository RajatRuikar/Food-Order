import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnCartComponent } from './on-cart.component';

describe('OnCartComponent', () => {
  let component: OnCartComponent;
  let fixture: ComponentFixture<OnCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnCartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
