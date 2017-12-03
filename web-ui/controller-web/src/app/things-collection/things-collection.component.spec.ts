import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThingsCollectionComponent } from './things-collection.component';

describe('ThingsCollectionComponent', () => {
  let component: ThingsCollectionComponent;
  let fixture: ComponentFixture<ThingsCollectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThingsCollectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThingsCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
