import { StudentCoursesListDto } from './student-courses-list-dto';

export class StudentDto {
  lastNameAndFirstName: string;
  indexNumber: number;
  courses: StudentCoursesListDto[];
}
