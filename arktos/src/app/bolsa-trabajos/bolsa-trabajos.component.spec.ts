import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BolsaTrabajosComponent } from './bolsa-trabajos.component';

describe('BolsaTrabajosComponent', () => {
  let component: BolsaTrabajosComponent;
  let fixture: ComponentFixture<BolsaTrabajosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BolsaTrabajosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BolsaTrabajosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
