import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelafreteComponent } from './tabelafrete.component';

describe('TabelafreteComponent', () => {
  let component: TabelafreteComponent;
  let fixture: ComponentFixture<TabelafreteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabelafreteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabelafreteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
