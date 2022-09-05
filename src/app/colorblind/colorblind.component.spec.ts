import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorblindComponent } from './colorblind.component';

describe('ColorblindComponent', () => {
  let component: ColorblindComponent;
  let fixture: ComponentFixture<ColorblindComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColorblindComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColorblindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
