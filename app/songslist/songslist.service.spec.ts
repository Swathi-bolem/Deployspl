import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { SongslistService } from './songslist.service';

describe('SongslistService', () => {
  let service: SongslistService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[RouterTestingModule,ReactiveFormsModule,FormsModule,HttpClientTestingModule],
    });
    service = TestBed.inject(SongslistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
