import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipcoinSaldoComponent } from './tipcoin-saldo.component';

describe('TipcoinSaldoComponent', () => {
  let component: TipcoinSaldoComponent;
  let fixture: ComponentFixture<TipcoinSaldoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipcoinSaldoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipcoinSaldoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
