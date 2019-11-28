import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MmaAddMovieComponent } from './mma-add-movie.component';

describe('MmaAddMovieComponent', () => {
  let component: MmaAddMovieComponent;
  let fixture: ComponentFixture<MmaAddMovieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MmaAddMovieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MmaAddMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
