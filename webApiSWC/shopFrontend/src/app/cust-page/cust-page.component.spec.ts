import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustPageComponent } from './cust-page.component';

describe('CustPageComponent', () => {
  let component: CustPageComponent;
  let fixture: ComponentFixture<CustPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
