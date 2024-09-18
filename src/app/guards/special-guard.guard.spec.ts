import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { specialGuardGuard } from './special-guard.guard';

describe('specialGuardGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => specialGuardGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
