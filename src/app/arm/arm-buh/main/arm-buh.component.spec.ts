import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArmBuhComponent } from './arm-buh.component';

describe('ArmBuhComponent', () => {
  let component: ArmBuhComponent;
  let fixture: ComponentFixture<ArmBuhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArmBuhComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArmBuhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
