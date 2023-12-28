import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Diagram1Component } from './diagram1.component';

describe('Diagram1Component', () => {
  let component: Diagram1Component;
  let fixture: ComponentFixture<Diagram1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Diagram1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Diagram1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
