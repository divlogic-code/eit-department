import FacultyDirectory from "../shared/FacultyDirectory";
import { restDepartments } from "../shared/restDepartments";

export default function ComputerApplicationsFaculty() {
  return <FacultyDirectory department={restDepartments.DCA} />;
}
