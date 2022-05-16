import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductModifierComponent } from './product-modifier.component';

describe('ProductModifierComponent', () => {
  let component: ProductModifierComponent;
  let fixture: ComponentFixture<ProductModifierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductModifierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductModifierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
