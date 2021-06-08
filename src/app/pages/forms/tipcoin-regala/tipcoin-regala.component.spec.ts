import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipcoinRegalaComponent } from './tipcoin-regala.component';

describe('TipcoinRegalaComponent', () => {
  let component: TipcoinRegalaComponent;
  let fixture: ComponentFixture<TipcoinRegalaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipcoinRegalaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipcoinRegalaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
