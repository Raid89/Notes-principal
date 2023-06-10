import { TestBed } from '@angular/core/testing';

import { LayoutInfoService } from './layout-info.service';

describe('LayoutInfoService', () => {
  let service: LayoutInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LayoutInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
