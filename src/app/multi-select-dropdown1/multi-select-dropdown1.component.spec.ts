import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiSelectDropdown1Component } from './multi-select-dropdown1.component';

describe('MultiSelectDropdown1Component', () => {
  let component: MultiSelectDropdown1Component;
  let fixture: ComponentFixture<MultiSelectDropdown1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MultiSelectDropdown1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultiSelectDropdown1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
