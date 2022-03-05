import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescubrirUsuariosComponent } from './descubrir-usuarios.component';

describe('DescubrirUsuariosComponent', () => {
  let component: DescubrirUsuariosComponent;
  let fixture: ComponentFixture<DescubrirUsuariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DescubrirUsuariosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DescubrirUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
