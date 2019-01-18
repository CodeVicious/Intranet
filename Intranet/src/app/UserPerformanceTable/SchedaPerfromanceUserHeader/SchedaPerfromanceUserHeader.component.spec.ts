/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SchedaPerfromanceUserHeaderComponent } from './SchedaPerfromanceUserHeader.component';

describe('SchedaPerfromanceUserHeaderComponent', () => {
  let component: SchedaPerfromanceUserHeaderComponent;
  let fixture: ComponentFixture<SchedaPerfromanceUserHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchedaPerfromanceUserHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchedaPerfromanceUserHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
