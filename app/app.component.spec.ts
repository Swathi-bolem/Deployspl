import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[RouterTestingModule,ReactiveFormsModule,FormsModule,HttpClientTestingModule],
      declarations: [
        AppComponent
      ],
      
    })
  });
 
  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('dom testing',()=>{
    const fixture = TestBed.createComponent(AppComponent);
    const data=fixture.nativeElement;
    expect(data.querySelector(".see").textContent).toContain('SSPL')
  });
  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.see').textContent).toContain('SSPL');
  });

 
});
