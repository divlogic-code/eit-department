import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import CSE from "./departments/CSE/CSE";
import ECE from "./departments/ECE/ECE";
import Mechanical from "./departments/Mechanical/Mechanical";
import Humanities from "./departments/Humanities/Humanities";
import Management from "./departments/Management/Management";
import Civil from "./departments/Civil/Civil";
import ComputerApplications from "./departments/ComputerApplications/ComputerApplications";
import CSEFaculty from "./departments/CSE/CSEFaculty";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Default */}
        <Route
          path="/"
          element={<Navigate to="/cse" replace />}
        />

        {/* Departments */}
        <Route path="/cse" element={<CSE />} />

        <Route path="/ece" element={<ECE />} />

        <Route
          path="/mechanical"
          element={<Mechanical />}
        />

        <Route
          path="/humanities"
          element={<Humanities />}
        />

        <Route
          path="/management"
          element={<Management />}
        />

        <Route
          path="/civil"
          element={<Civil />}
        />

        <Route
          path="/computer-applications"
          element={<ComputerApplications />}
        />

        {/* 404 */}
        <Route
          path="*"
          element={<Navigate to="/cse" replace />}
        />
        <Route path="/cse/faculty" element={<CSEFaculty />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;