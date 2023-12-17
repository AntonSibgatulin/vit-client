import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBuhComponent } from './edit-buh.component';

describe('EditBuhComponent', () => {
  let component: EditBuhComponent;
  let fixture: ComponentFixture<EditBuhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditBuhComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditBuhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
