import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignIntComponent } from './sign-int.component';

describe('SignIntComponent', () => {
  let component: SignIntComponent;
  let fixture: ComponentFixture<SignIntComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignIntComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignIntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
