import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipcoinSimulaComponent } from './tipcoin-simula.component';

describe('TipcoinSimulaComponent', () => {
  let component: TipcoinSimulaComponent;
  let fixture: ComponentFixture<TipcoinSimulaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipcoinSimulaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipcoinSimulaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
