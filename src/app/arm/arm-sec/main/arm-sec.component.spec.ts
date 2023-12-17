import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArmSecComponent } from './arm-sec.component';

describe('ArmSecComponent', () => {
  let component: ArmSecComponent;
  let fixture: ComponentFixture<ArmSecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArmSecComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArmSecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
