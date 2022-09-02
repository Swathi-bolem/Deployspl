import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { ActivateguardService } from './activateguard.service';

describe('ActivateguardService', () => {
  let service: ActivateguardService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[RouterTestingModule,ReactiveFormsModule,FormsModule,HttpClientTestingModule],
    });
    service = TestBed.inject(ActivateguardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
