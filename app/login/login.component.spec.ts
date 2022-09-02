import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[RouterTestingModule,ReactiveFormsModule,FormsModule,HttpClientTestingModule], declarations: [ LoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
   
    fixture.detectChanges();
  });
  afterEach(() => {
    fixture.destroy();})

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('dom testing',()=>{
    const data=fixture.nativeElement;
    expect(data.querySelector(".testit").textContent).toContain("Login")
  });
  it('class testing',()=>{
    expect(component.test).toBe("hello")
  })
});
