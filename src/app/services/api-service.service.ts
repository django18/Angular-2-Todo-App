import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Http } from '@angular/http';

const API_URL = environment.apiUrl;

@Injectable()
export class ApiServiceService {

  constructor(private http: Http) { }

}
