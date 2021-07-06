import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GardenaccessoriesComponent } from './gardenaccessories.component';

describe('GardenaccessoriesComponent', () => {
  let component: GardenaccessoriesComponent;
  let fixture: ComponentFixture<GardenaccessoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GardenaccessoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GardenaccessoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
