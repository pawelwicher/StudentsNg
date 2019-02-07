import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from './../models/student';


@Injectable({ providedIn: 'root' })
export class StudentsService {

  constructor(private http: HttpClient) { }

  getStudentList(): Observable<Student[]> {
    return this.http.get<Student[]>('http://localhost:8033/api/students');
  }
}
