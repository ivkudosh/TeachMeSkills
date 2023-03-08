import { Building, University } from "./classes";
import { assignStudentToUniversity } from "./helpers/helpers";
import * as objects from "./constants/constants";

const danaMall = new Building(2020, "Minsk");
danaMall.getBuildingInfo();

const oxfordUniversity = new University(2022, "Lida", "Oxford");

oxfordUniversity.getStudentsList();
oxfordUniversity.getYoungestStudentAge();

try {
    assignStudentToUniversity(oxfordUniversity, ...Object.values(objects));
} catch (error: any) {
    console.log(error.message);
}

oxfordUniversity.getStudentsList();
oxfordUniversity.getYoungestStudentAge();
