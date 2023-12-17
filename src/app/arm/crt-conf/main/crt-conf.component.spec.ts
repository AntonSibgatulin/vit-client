import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrtConfComponent } from './crt-conf.component';

describe('CrtConfComponent', () => {
  let component: CrtConfComponent;
  let fixture: ComponentFixture<CrtConfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrtConfComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CrtConfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
