import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { Search2filterPipe } from '../search2filter.pipe';

import { PlaylistComponent } from './playlist.component';

describe('PlaylistComponent', () => {
  let component: PlaylistComponent;
  let fixture: ComponentFixture<PlaylistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[RouterTestingModule,ReactiveFormsModule,FormsModule,HttpClientTestingModule],
      declarations: [ PlaylistComponent,Search2filterPipe]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('dom testing',()=>{
    const data=fixture.nativeElement;
    expect(data.querySelector(".test").textContent).toContain("Select songs to create new playlist")
  });
  it('class testing',()=>{
    expect(component.test).toBe("hello")
  })
});
