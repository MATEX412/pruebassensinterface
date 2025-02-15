import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CamerasInterfaceComponent } from './cameras-interface.component';

describe('CamerasInterfaceComponent', () => {
  let component: CamerasInterfaceComponent;
  let fixture: ComponentFixture<CamerasInterfaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CamerasInterfaceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CamerasInterfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
