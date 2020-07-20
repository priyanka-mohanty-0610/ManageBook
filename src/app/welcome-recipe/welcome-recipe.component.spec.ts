import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeRecipeComponent } from './welcome-recipe.component';

describe('WelcomeRecipeComponent', () => {
  let component: WelcomeRecipeComponent;
  let fixture: ComponentFixture<WelcomeRecipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WelcomeRecipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeRecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
