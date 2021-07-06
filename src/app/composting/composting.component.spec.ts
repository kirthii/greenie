import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompostingComponent } from './composting.component';

describe('CompostingComponent', () => {
  let component: CompostingComponent;
  let fixture: ComponentFixture<CompostingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompostingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompostingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
