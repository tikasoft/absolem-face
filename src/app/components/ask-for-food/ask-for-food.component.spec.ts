import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AskForFoodComponent } from './ask-for-food.component';

describe('AskForFoodComponent', () => {
  let component: AskForFoodComponent;
  let fixture: ComponentFixture<AskForFoodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AskForFoodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AskForFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
