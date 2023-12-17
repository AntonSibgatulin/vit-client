import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSecComponent } from './edit-sec.component';

describe('EditSecComponent', () => {
  let component: EditSecComponent;
  let fixture: ComponentFixture<EditSecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditSecComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditSecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
