import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SensInterfaceComponent } from './sens-interface.component';

describe('SensInterfaceComponent', () => {
  let component: SensInterfaceComponent;
  let fixture: ComponentFixture<SensInterfaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SensInterfaceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SensInterfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
