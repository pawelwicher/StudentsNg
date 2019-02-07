import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { StudentsService } from 'src/app/services/students.service';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { StudentDto } from 'src/app/models/student-dto';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.scss']
})
export class StudentDetailComponent implements OnInit {

  student: StudentDto;

  constructor(
    private route: ActivatedRoute,
    private studentsService: StudentsService) { }

  ngOnInit() {
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        const id = +params.get('id');
        return this.studentsService.getStudent(id);
      })
    ).subscribe(data => this.student = data);
  }

}
