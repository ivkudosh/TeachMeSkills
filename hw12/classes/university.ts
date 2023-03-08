import { Building } from "./building";

export class University extends Building {
    constructor(public foundationYear: number, public city: string, public name: string) {
        super(foundationYear, city);
    }

    public students: string[] = [];

    public studentsAge: number[] = [];

    public getStudentsList() {
        this.students.length
            ? console.log(this.students)
            : console.log(`The studying year hasn't begun yet in ${this.name} university`);
    }

    public getYoungestStudentAge() {
        this.studentsAge.length
            ? console.log(`The youngest student we have in ${this.name} university is ${Math.min(...this.studentsAge)} years old.`)
            : console.log('We are still waiting for new students.');
    }
}