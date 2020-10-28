import {Injectable} from '@angular/core';
import { Student } from 'src/app/component/student/student';

@Injectable({
    providedIn: 'root'
})
export class StudentService {
    getStudents():Student[] {
        return [
            {
                id: 1,
                name: "student 1",
                age: 20
            },
            {
                id: 2,
                name: "student 2",
                age: 21
            },
            {
                id: 3,
                name: "student 3",
                age: 22
            }

        ]
    }
}