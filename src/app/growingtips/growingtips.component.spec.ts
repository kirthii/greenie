import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrowingtipsComponent } from './growingtips.component';

describe('GrowingtipsComponent', () => {
  let component: GrowingtipsComponent;
  let fixture: ComponentFixture<GrowingtipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrowingtipsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GrowingtipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
