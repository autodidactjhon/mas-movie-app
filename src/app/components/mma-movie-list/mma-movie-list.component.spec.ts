import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MmaMovieListComponent } from './mma-movie-list.component';

describe('MmaMovieListComponent', () => {
  let component: MmaMovieListComponent;
  let fixture: ComponentFixture<MmaMovieListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MmaMovieListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MmaMovieListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
