import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  let userRole = 'user';
  const router = inject(Router);
  if (userRole !== 'admin') {
  //route to access denied page
  router.navigate(['/access-denied']);
  }
  
  return true;
};
