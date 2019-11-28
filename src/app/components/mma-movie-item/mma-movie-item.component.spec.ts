import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MmaMovieItemComponent } from './mma-movie-item.component';

describe('MmaMovieItemComponent', () => {
  let component: MmaMovieItemComponent;
  let fixture: ComponentFixture<MmaMovieItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MmaMovieItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MmaMovieItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
