import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSecComponent } from './create-sec.component';

describe('CreateSecComponent', () => {
  let component: CreateSecComponent;
  let fixture: ComponentFixture<CreateSecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateSecComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateSecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
