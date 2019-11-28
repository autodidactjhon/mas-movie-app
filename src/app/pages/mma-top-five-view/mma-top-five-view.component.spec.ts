import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MmaTopFiveViewComponent } from './mma-top-five-view.component';

describe('MmaTopFiveViewComponent', () => {
  let component: MmaTopFiveViewComponent;
  let fixture: ComponentFixture<MmaTopFiveViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MmaTopFiveViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MmaTopFiveViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
