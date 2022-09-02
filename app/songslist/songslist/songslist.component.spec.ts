import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { SearchfilterPipe } from 'src/app/searchfilter.pipe';
import { SongslistComponent } from './songslist.component';

describe('SongslistComponent', () => {
  let component: SongslistComponent;
  let fixture: ComponentFixture<SongslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[RouterTestingModule,ReactiveFormsModule,FormsModule,HttpClientTestingModule],
      declarations: [ SongslistComponent,SearchfilterPipe ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SongslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('dom testing',()=>{
    const data=fixture.nativeElement;
    expect(data.querySelector(".see").textContent).toContain('What')});
  it('class testing',()=>{
   expect(component.test).toBe("Hello")
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });  
});


