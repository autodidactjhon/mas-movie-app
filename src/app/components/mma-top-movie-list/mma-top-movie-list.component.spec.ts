import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MmaTopMovieListComponent } from './mma-top-movie-list.component';

describe('MmaTopMovieListComponent', () => {
  let component: MmaTopMovieListComponent;
  let fixture: ComponentFixture<MmaTopMovieListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MmaTopMovieListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MmaTopMovieListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
