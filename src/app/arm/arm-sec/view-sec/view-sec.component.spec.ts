import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSecComponent } from './view-sec.component';

describe('ViewSecComponent', () => {
  let component: ViewSecComponent;
  let fixture: ComponentFixture<ViewSecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewSecComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewSecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
