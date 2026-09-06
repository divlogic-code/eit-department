import FacultyDirectory from "../shared/FacultyDirectory";
import { restDepartments } from "../shared/restDepartments";

export default function ManagementFaculty() {
  return <FacultyDirectory department={restDepartments.DMS} />;
}
