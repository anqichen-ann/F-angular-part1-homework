import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/service/student.service';
import { Student } from '../student/student';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.sass']
})
export class StudentListComponent implements OnInit {
  students:Student[];
  selectedName: string;

  constructor( studentService: StudentService) { 
    this.students = studentService.getStudents();

  }
  ngOnInit(): void {
  }

}
