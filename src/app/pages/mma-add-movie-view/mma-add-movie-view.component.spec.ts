import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MmaAddMovieViewComponent } from './mma-add-movie-view.component';

describe('MmaAddMovieViewComponent', () => {
  let component: MmaAddMovieViewComponent;
  let fixture: ComponentFixture<MmaAddMovieViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MmaAddMovieViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MmaAddMovieViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
