import DepartmentPage from "../shared/DepartmentPage";
import { restDepartments } from "../shared/restDepartments";

export default function ComputerApplications() {
  return <DepartmentPage department={restDepartments.DCA} />;
}
