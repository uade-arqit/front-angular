import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreceInvierteTipcoinComponent } from './crece-invierte-tipcoin.component';

describe('CreceInvierteTipcoinComponent', () => {
  let component: CreceInvierteTipcoinComponent;
  let fixture: ComponentFixture<CreceInvierteTipcoinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreceInvierteTipcoinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreceInvierteTipcoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
