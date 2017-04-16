import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RapidSearchComponent } from './rapid-search.component';

describe('RapidSearchComponent', () => {
  let component: RapidSearchComponent;
  let fixture: ComponentFixture<RapidSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RapidSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RapidSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
