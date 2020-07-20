import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsListViewComponent } from './cards-list-view.component';

describe('CardsListViewComponent', () => {
  let component: CardsListViewComponent;
  let fixture: ComponentFixture<CardsListViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardsListViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
