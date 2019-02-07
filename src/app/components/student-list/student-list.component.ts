import { Component, OnInit } from '@angular/core';
import { StudentsService } from 'src/app/services/students.service';
import { Observable } from 'rxjs';
import { Student } from 'src/app/models/student';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {

  students$: Observable<Student[]>;

  constructor(private studentsService: StudentsService) { }

  ngOnInit() {
    this.students$ = this.studentsService.getStudentList();
  }

}
