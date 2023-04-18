import { University } from "../classes";
import { IStudent } from "../types/types";

export default function assignStudentToUniversity(university: University, ...students: IStudent[]) {
    for (const student of students) {
        const { name, surname, age } = student;

        if (age < 16) {
            throw Error(`We believe that ${name} ${surname} should finish school at first, as he/she is only ${age} years old`);
        }

        university.students.push(`${name} ${surname}`);

        if (!university.studentsAge.includes(age)) {
            university.studentsAge.push(age);
        }
    }
};