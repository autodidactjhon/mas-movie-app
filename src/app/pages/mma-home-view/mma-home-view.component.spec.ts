import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MmaHomeViewComponent } from './mma-home-view.component';

describe('MmaHomeViewComponent', () => {
  let component: MmaHomeViewComponent;
  let fixture: ComponentFixture<MmaHomeViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MmaHomeViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MmaHomeViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
