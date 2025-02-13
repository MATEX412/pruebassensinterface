import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PesoInterfaceComponent } from './peso-interface.component';

describe('PesoInterfaceComponent', () => {
  let component: PesoInterfaceComponent;
  let fixture: ComponentFixture<PesoInterfaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PesoInterfaceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PesoInterfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
