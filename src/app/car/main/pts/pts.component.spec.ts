import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PtsComponent } from './pts.component';

describe('PtsComponent', () => {
  let component: PtsComponent;
  let fixture: ComponentFixture<PtsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PtsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PtsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
