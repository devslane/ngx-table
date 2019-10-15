import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DlMatTableComponent } from './dl-mat-table.component';

describe('DlMatTableComponent', () => {
  let component: DlMatTableComponent;
  let fixture: ComponentFixture<DlMatTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DlMatTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DlMatTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
