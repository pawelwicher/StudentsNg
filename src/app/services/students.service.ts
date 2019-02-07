import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StudentListDto } from '../models/student-list-dto';
import { StudentDto } from '../models/student-dto';


@Injectable({ providedIn: 'root' })
export class StudentsService {

  constructor(private http: HttpClient) { }

  getStudentList(): Observable<StudentListDto[]> {
    return this.http.get<StudentListDto[]>('http://localhost:8033/api/students');
  }

  getStudent(id: number): Observable<StudentDto> {
    return this.http.get<StudentDto>(`http://localhost:8033/api/students/${id}`);
  }
}
