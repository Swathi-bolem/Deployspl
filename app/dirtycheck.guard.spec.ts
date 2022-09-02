import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DirtycheckGuard } from './dirtycheck.guard';
import { HttpClientModule } from '@angular/common/http';

describe('DirtycheckGuard', () => {
  let guard: DirtycheckGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({imports:[RouterTestingModule, HttpClientTestingModule]});
    guard = TestBed.inject(DirtycheckGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
