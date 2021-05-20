import { HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  constructor(
    private toastr: ToastrService
  ) { }

  public handleError(error: Error | HttpErrorResponse) {

    if (error instanceof HttpErrorResponse) {
      // Server or connection error happened
      if (!navigator.onLine) {
        // Handle offline error
        console.error('No internet connection!');
      } else {
        // Handle Http Error (error.status === 403, 404...)
        console.error(`${error.status} - ${error.message}`);
        this.toastr.error(error.error.title || error.error.message);
      }
    } else {
      // Client Error
      console.error(error);
    }
    return throwError(error);
  }
}
