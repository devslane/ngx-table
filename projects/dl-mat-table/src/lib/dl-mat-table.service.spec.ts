import { TestBed } from '@angular/core/testing';

import { DlMatTableService } from './dl-mat-table.service';

describe('DlMatTableService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DlMatTableService = TestBed.get(DlMatTableService);
    expect(service).toBeTruthy();
  });
});
