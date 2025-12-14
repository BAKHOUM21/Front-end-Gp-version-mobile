import { HttpInterceptorFn } from '@angular/common/http';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {

  const token = localStorage.getItem('tokenCon');
  
  if (token!=null) {
    const clonedReq = req.clone({
      headers: req.headers.set('WWW-Authenticate', 'Bearer ' + token),
    });
  
    console.log(clonedReq);
   // return next(clonedReq);
  }
  console.log(req);
  return next(req);

};

