import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuidaAhorraTipcoinComponent } from './cuida-ahorra-tipcoin.component';

describe('CuidaAhorraTipcoinComponent', () => {
  let component: CuidaAhorraTipcoinComponent;
  let fixture: ComponentFixture<CuidaAhorraTipcoinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuidaAhorraTipcoinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuidaAhorraTipcoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
