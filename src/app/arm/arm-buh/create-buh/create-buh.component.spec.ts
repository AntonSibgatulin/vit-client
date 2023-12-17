import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBuhComponent } from './create-buh.component';

describe('CreateBuhComponent', () => {
  let component: CreateBuhComponent;
  let fixture: ComponentFixture<CreateBuhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateBuhComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateBuhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
