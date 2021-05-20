import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Package } from '../_models/package.model';
import { CommonService } from './common.service';

@Injectable({
  providedIn: 'root'
})
export class PackageService {

  constructor(
    private http: HttpClient,
    private commonService: CommonService
  ) { }

  getPackages() {
    return this.http.get<Package[]>(`${environment.api_url}/DealPackage`)
      .pipe(
        catchError(err => this.commonService.handleError(err))
      );
  }
}
