import DepartmentPage from "../shared/DepartmentPage";
import { restDepartments } from "../shared/restDepartments";

export default function Management() {
  return <DepartmentPage department={restDepartments.DMS} />;
}
