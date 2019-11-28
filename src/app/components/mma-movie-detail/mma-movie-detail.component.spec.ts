import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MmaMovieDetailComponent } from './mma-movie-detail.component';

describe('MmaMovieDetailComponent', () => {
  let component: MmaMovieDetailComponent;
  let fixture: ComponentFixture<MmaMovieDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MmaMovieDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MmaMovieDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
